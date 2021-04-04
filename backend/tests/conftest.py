import pytest
from flask import Flask

from app import create_app, init_db


@pytest.fixture(scope="session")
def app():
    app = create_app()

    with app.app_context():
        init_db()

    yield app


@pytest.fixture(scope="session")
def client(app: Flask):
    return app.test_client()


@pytest.fixture(scope="session")
def runner(app: Flask):
    return app.test_cli_runner()