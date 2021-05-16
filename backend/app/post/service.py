from typing import Any, List
from uuid import UUID

from app import db
from database import TupleNotFound

from .model import Post
from .repository import PostRepository


class PostService:
    def __init__(self) -> None:
        self._repository = PostRepository(db.session)

    def create_post(self, data: Any) -> Post:
        post = self._repository.add(**data)
        return post

    def get_post_by_id(self, id: UUID, data: Any) -> Post:
        post = self._repository.find_one(id=id)
        if post is None:
            raise TupleNotFound
        return post

    def update_by_id(self, id: UUID, data: Any) -> Post:
        post = self._repository.find_one(id=id)
        if post is None:
            raise TupleNotFound
        return post

    def remove_by_id(self, id: UUID) -> None:
        post = self._repository.find_one(id=id)
        if post is None:
            raise TupleNotFound
        self._repository.delete(post)

    def get_posts(self) -> List[Post]:
        posts = self._repository.find_all()
        return posts
