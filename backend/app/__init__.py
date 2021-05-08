import os

from flask import Flask
from flask_smorest import Api

from database import Database

db = Database()


def create_app(environment: str = "development"):
    if environment not in ["production", "development", "testing"]:
        raise RuntimeError("app environment is an invalid.")

    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object(f"config.{environment.capitalize()}Config")
    app.config.from_pyfile("config.py", silent=True)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db.init_app(app)
    api = Api(app)

    from app import user

    api.register_blueprint(user.bp)

    return app
