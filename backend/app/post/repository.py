from typing import Any, List, Optional

from database import SQLAlchemyRepository

from .model import Post


class PostRepository(SQLAlchemyRepository):
    def add(self, **kwargs) -> Post:
        with self.session_factory() as session:
            post = Post(**kwargs)
            session.add(post)
            session.commit()
            session.refresh(post)
            return post

    def find_all(self, **kwargs) -> List[Post]:
        with self.session_factory() as session:
            posts = session.query(Post).filter_by(**kwargs).all()
            return posts

    def find_one(self, **kwargs) -> Optional[Post]:
        with self.session_factory() as session:
            post = session.query(Post).filter_by(**kwargs).first()
            return post

    def update(self, post: Post, data: Any) -> Post:
        with self.session_factory() as session:
            post = session.query(Post).filter(Post.id == post.id).first()
            for key, value in data.items():
                setattr(post, key, value)
            session.commit()
            session.refresh(post)
            return post

    def delete(self, post: Post) -> None:
        with self.session_factory() as session:
            session.delete(post)
            session.commit()
