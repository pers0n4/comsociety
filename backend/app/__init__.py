import os

from flask import Flask
from flask_cors import CORS
from flask_smorest import Api

from database import SQLAlchemy

db = SQLAlchemy()


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
    CORS(app)

    from app import auth, data, post, user

    api.register_blueprint(user.bp)
    api.register_blueprint(auth.bp)
    api.register_blueprint(post.bp)
    api.register_blueprint(data.bp)

    return app
