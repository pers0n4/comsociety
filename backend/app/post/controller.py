from typing import Any
from uuid import UUID

from flask.views import MethodView
from flask_smorest import Blueprint, abort
from flask_smorest.error_handler import ErrorSchema

from database import TupleNotFound

from .dto import CreatePostSchema, PostSchema, UpdatePostSchema
from .service import PostService

bp = Blueprint(
    "post", __name__, url_prefix="/posts", description="Operation about post"
)
service = PostService()


@bp.route("/")
class PostController(MethodView):
    @bp.arguments(CreatePostSchema)
    @bp.response(201, PostSchema)
    def post(self, data: Any):
        """Create post"""
        post = service.create_post(data)
        return post

    @bp.response(200, PostSchema(many=True))
    def get(self):
        """Get post list.

        Return all posts.
        """
        posts = service.get_posts()
        return posts


@bp.route("/detail/<uuid:id>")
class PostController(MethodView):
    @bp.arguments(PostSchema)
    @bp.alt_response(404, ErrorSchema)
    def get(self, id: UUID):
        """Get post by id"""
        try:
            post = service.get_post_by_id(id)
            return post
        except TupleNotFound:
            abort(404)

    @bp.arguments(UpdatePostSchema)
    @bp.response(200, PostSchema)
    @bp.alt_response(404, ErrorSchema)
    def update(self, id: UUID):
        """Update post by id"""
        try:
            post = service.update_by_id(id)
            return post
        except TupleNotFound:
            abort(404)

    @bp.response(204)
    @bp.alt_response(404, ErrorSchema)
    def remove(self, id: UUID):
        """Remove post by id"""
        try:
            service.remove_by_id(id)
        except TupleNotFound:
            abort(404)
