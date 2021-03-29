from typing import Any
from uuid import UUID

from flask.views import MethodView
from flask_smorest import Blueprint, abort
from flask_smorest.error_handler import ErrorSchema

from database import TupleNotFound

from .dto import UserCreateSchema, UserSchema, UserUpdateSchema
from .service import UserService

bp = Blueprint(
    "user",
    __name__,
    url_prefix="/users",
    description="Operations about user",
)
service = UserService()


@bp.route("/")
class UsersController(MethodView):
    @bp.arguments(UserCreateSchema)
    @bp.response(201, UserSchema)
    def post(self, data: Any):
        """Create user"""
        user = service.create_user(data)
        return user

    @bp.response(200, UserSchema(many=True))
    def get(self):
        """Get users

        Return all users.
        """
        users = service.get_users()
        return users


@bp.route("/<uuid:id>")
class UserController(MethodView):
    @bp.response(200, UserSchema)
    @bp.alt_response(404, ErrorSchema)
    def get(self, id: UUID):
        """Get user by id"""
        try:
            user = service.get_user_by_id(id)
            return user
        except TupleNotFound:
            abort(404)

    @bp.arguments(UserUpdateSchema)
    @bp.response(200, UserSchema)
    @bp.alt_response(404, ErrorSchema)
    def patch(self, data: Any, id: UUID):
        """Update user by id"""
        try:
            user = service.update_by_id(id, data)
            return user
        except TupleNotFound:
            abort(404)

    @bp.response(204)
    @bp.alt_response(404, ErrorSchema)
    def delete(self, id: UUID):
        """Delete user by id"""
        try:
            service.remove_by_id(id)
        except TupleNotFound:
            abort(404)
