from datetime import datetime, timedelta

import jwt
from flask import current_app

from app import db
from app.user.repository import UserRepository


class AuthService:
    def __init__(self) -> None:
        self._user_repository = UserRepository(db.session)

    def create_token(self, data) -> dict:
        user = self._user_repository.find_one(user_id=data["user_id"])
        if user is None:
            # user not found
            raise RuntimeError

        if not user.check_password(data["password"]):
            # password
            raise RuntimeError

        access_token = jwt.encode(
            {
                "iat": datetime.utcnow(),
                "exp": datetime.utcnow() + timedelta(minutes=60),
                "user_id": str(user.id),
            },
            current_app.config["SECRET_KEY"],
            algorithm="HS512",
        )
        refresh_token = jwt.encode(
            {
                "iat": datetime.utcnow(),
                "exp": datetime.utcnow() + timedelta(hours=4),
            },
            current_app.config["SECRET_KEY"],
            algorithm="HS512",
        )
        return {"access_token": access_token, "refresh_token": refresh_token}

    def validate_token(self, token) -> dict:
        return jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS512"])

    def refresh_token(self, token) -> dict:
        payload = self.validate_token(token)
        user = self._user_repository.find_one(id=payload["user_id"])
        if user is None:
            # user not found
            raise RuntimeError

        access_token = jwt.encode(
            {
                "iat": datetime.utcnow(),
                "exp": datetime.utcnow() + timedelta(minutes=60),
                "user_id": str(user.id),
            },
            current_app.config["SECRET_KEY"],
            algorithm="HS512",
        )

        return {"access_token": access_token}
