import click
from flask import Flask
from flask.cli import with_appcontext
from flask_smorest import Api

from database import Database

db = Database()


def create_app(environment="development"):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(f"config.{environment.capitalize()}Config")

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
