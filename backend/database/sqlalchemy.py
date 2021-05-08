from abc import ABC, abstractmethod
from contextlib import contextmanager
from typing import Any, List, Optional

import click
from flask import Flask
from flask.cli import with_appcontext
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session, scoped_session, sessionmaker

Base = declarative_base()


class SQLAlchemy:
    def init_app(self, app: Flask) -> None:
        if not app.config.get("SQLALCHEMY_URL"):
            raise RuntimeError("SQLALCHEMY_URL is None.")

        self._engine = create_engine(app.config.get("SQLALCHEMY_URL"))
        self._session_factory = scoped_session(
            sessionmaker(
                autocommit=False,
                autoflush=False,
                bind=self._engine,
            )
        )

        @click.command("init-db")
        @with_appcontext
        def init_db_command():
            """Clear the existing data and create new tables."""
            self.init_db()
            click.echo("Initialized the database.")

        app.cli.add_command(init_db_command)

    @contextmanager
    def session(self):
        session: Session = self._session_factory()
        try:
            yield session
        except Exception:
            session.rollback()
            raise
        finally:
            session.close()

    def create_all(self) -> None:
        Base.metadata.create_all(self._engine)

    def drop_all(self) -> None:
        Base.metadata.drop_all(self._engine)

    def init_db(self):
        self.drop_all()
        self.create_all()


class SQLAlchemyRepository(ABC):
    def __init__(self, session_factory) -> None:
        self.session_factory = session_factory

    @abstractmethod
    def add(self) -> Any:
        pass

    @abstractmethod
    def find_all(self) -> List[Any]:
        pass

    @abstractmethod
    def find_one(self) -> Optional[Any]:
        pass

    @abstractmethod
    def update(self, instance: Any, data: Any) -> Any:
        pass

    @abstractmethod
    def delete(self, instance: Any) -> None:
        pass


class TupleNotFound(Exception):
    pass
