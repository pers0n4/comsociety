import pytest
from flask.testing import FlaskClient
from flask.wrappers import Response


@pytest.fixture(scope="module")
def state():
    return {}


@pytest.mark.parametrize(
    "user",
    [
        {
            "id_number": "20163341",
            "name": "D. Y.",
            "email": "20163341@office.deu.ac.kr",
            "password": "password",
        }
    ],
)
def test_create_user(client: FlaskClient, state, user):
    response: Response = client.post(
        "/users/",
        json=user,
    )
    assert response.status_code == 201
    assert response.json["name"] == user["name"]

    state["user_id"] = response.json["id"]


def test_get_user(client: FlaskClient, state):
    response: Response = client.get(f'/users/{state["user_id"]}')
    assert response.status_code == 200


def test_update_user(client: FlaskClient, state):
    response: Response = client.patch(
        f'/users/{state["user_id"]}',
        json={
            "password": "password",
        },
    )
    assert response.status_code == 200


def test_delete_user(client: FlaskClient, state):
    response: Response = client.delete(f'/users/{state["user_id"]}')
    assert response.status_code == 204

    response = client.get(f'/users/{state["user_id"]}')
    assert response.status_code == 404
