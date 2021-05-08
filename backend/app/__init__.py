from flask import Flask
from flask_smorest import Api

from database import Database

db = Database()


def create_app(environment="development"):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(f"config.{environment.capitalize()}Config")

    db.init_app(app)
    api = Api(app)

    from app import user

    api.register_blueprint(user.bp)

    return app
