from datetime import datetime

import bcrypt
from sqlalchemy import Column, DateTime, String
from sqlalchemy.ext.hybrid import hybrid_property

from database import UUID, Base, uuid4


class User(Base):
    __tablename__ = "users"

    id = Column(UUID, primary_key=True, default=uuid4)
    name = Column(String(30), nullable=False)
    user_id = Column(String(8), nullable=False)
    _password = Column("password", String, nullable=False)
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

        self._password = bcrypt.hashpw(password, salt).decode("utf-8")

    def check_password(self, value) -> bool:
        password = bytes(value, "utf-8")
        hashed_password = self._password.encode("utf-8")

        return bcrypt.checkpw(password, hashed_password)
