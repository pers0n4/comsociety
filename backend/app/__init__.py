import click
from flask import Flask
from flask.cli import with_appcontext
from flask_smorest import Api

from database import Database

db = Database()


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    if app.config.get("FLASK_ENV") == "development":
        app.config.from_object("config.DevelopmentConfig")
    elif app.config.get("FLASK_ENV") == "test":
        app.config.from_object("config.TestConfig")
    else:
        app.config.from_object("config.ProductionConfig")

    db.init_app(app)
    api = Api(app)

    app.cli.add_command(init_db_command)

    from app import user

    api.register_blueprint(user.bp)

    return app


def init_db():
    db.drop_all()
    db.create_all()


@click.command("init-db")
@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo("Initialized the database.")
