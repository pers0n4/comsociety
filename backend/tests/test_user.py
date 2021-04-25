import pytest
from flask import Response


@pytest.fixture
def user():
    return {
        "name": "name",
        "email": "email@example.org",
        "password": "password",
        "identification_number": "20160000",
    }


def test_create_user(client, state, user):
    response: Response = client.post(
        "/users/",
        json=user,
    )

    assert response.status_code == 201
    assert "id" in response.json

    state["id"] = response.json["id"]


def test_get_all_users(client, state, user):
    response: Response = client.get(
        "/users/",
    )

    assert response.status_code == 200
    assert isinstance(response.json, list)


def test_get_user_by_id(client, state, user):
    response: Response = client.get(
        f'/users/{state["id"]}',
    )

    assert response.status_code == 200
    assert response.json["name"] == user["name"]


@pytest.mark.parametrize(
    "data, status",
    [
        (dict(password="test"), 200),
        (dict(name="test"), 422),
    ],
    ids=(200, 422),
)
def test_update_user_by_id(client, state, data, status):
    response: Response = client.patch(
        f'/users/{state["id"]}',
        json=data,
    )

    assert response.status_code == status


def test_delete_user_by_id(client, state):
    response: Response = client.delete(
        f'/users/{state["id"]}',
    )

    assert response.status_code == 204


def test_delete_not_found_user_by_id(client, state):
    response: Response = client.delete(
        f'/users/{state["id"]}',
    )

    assert response.status_code == 404
