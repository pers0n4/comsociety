from typing import Any, List, Optional

from database import SQLAlchemyRepository

from .model import User


class UserRepository(SQLAlchemyRepository):
    def add(self, **kwargs) -> User:
        with self.session_factory() as session:
            user = User(**kwargs)
            session.add(user)
            session.commit()
            session.refresh(user)
            return user

    def find_all(self, **kwargs) -> List[User]:
        with self.session_factory() as session:
            users = session.query(User).filter_by(**kwargs).all()
            return users

    def find_one(self, **kwagrs) -> Optional[User]:
        with self.session_factory() as session:
            user = session.query(User).filter_by(**kwagrs).first()
            return user

    def update(self, user: User, data: Any) -> User:
        with self.session_factory() as session:
            user = session.query(User).filter(User.id == user.id).first()
            for key, value in data.items():
                setattr(user, key, value)
            session.commit()
            session.refresh(user)
            return user

    def delete(self, user: User) -> None:
        with self.session_factory() as session:
            session.delete(user)
            session.commit()
