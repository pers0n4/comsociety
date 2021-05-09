from functools import wraps

from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from flask_smorest.error_handler import ErrorSchema
from jwt import DecodeError

from .dto import TokenAuthorizationHeader, TokenCreateSchema, TokenResponseSchema
from .service import AuthService

bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/auth",
)
service = AuthService()


def auth_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        authorization = request.headers.get("Authorization")
        if not authorization:
            abort(401)

        _, token = authorization.split(" ")

        try:
            service.validate_token(token)
        except DecodeError:
            abort(401)

        return f(*args, **kwargs)

    return wrap


@bp.route("/")
class AuthController(MethodView):
    @bp.arguments(TokenCreateSchema)
    @bp.response(200, TokenResponseSchema)
    def post(self, data):
        """ Create token """
        token = service.create_token(data)
        return token

    @bp.arguments(TokenAuthorizationHeader, location="headers")
    @bp.response(401, ErrorSchema)
    @bp.response(200, TokenResponseSchema)
    @auth_required
    def get(self, headers):
        """ Refresh token """
        _, token = headers["Authorization"].split(" ")
        return service.refresh_token(token)
