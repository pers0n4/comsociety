from typing import Any, List
from uuid import UUID

from app import db
from database import TupleNotFound

from .model import User
from .repository import UserRepository


class UserService:
    def __init__(self) -> None:
        self._repository = UserRepository(db.session)

    def create_user(self, data: Any) -> User:
        user = self._repository.add(**data)
        return user

    def get_users(self) -> List[User]:
        users = self._repository.find_all()
        return users

    def get_user_by_id(self, id: UUID) -> User:
        user = self._repository.find_one(id=id)
        if user is None:
            raise TupleNotFound
        return user

    def update_by_id(self, id: UUID, data: Any) -> User:
        user = self._repository.find_one(id=id)
        if user is None:
            raise TupleNotFound
        return self._repository.update(user, data)

    def remove_by_id(self, id: UUID) -> None:
        user = self._repository.find_one(id=id)
        if user is None:
            raise TupleNotFound
        self._repository.delete(user)
