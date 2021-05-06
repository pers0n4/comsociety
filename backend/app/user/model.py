from datetime import datetime
from uuid import uuid4

import bcrypt
from sqlalchemy import Column, DateTime, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.hybrid import hybrid_property

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String(30), nullable=False)
    email = Column(String(30), nullable=False)
    _password = Column("password", String, nullable=False)
    identification_number = Column(String(8), nullable=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    deleted_at = Column(DateTime)

    @hybrid_property
    def password(self):  # type: ignore
        return self._password

    @password.setter  # type: ignore
    def password(self, value):
        password = bytes(value, "utf-8")
        salt = bcrypt.gensalt()

        self._password = bcrypt.hashpw(password, salt)

    def check_password(self, value):
        password = bytes(value, "utf-8")

        return bcrypt.checkpw(password, self._password)
