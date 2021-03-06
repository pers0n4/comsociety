class Config(object):
    SECRET_KEY = "SECRET_KEY"
    JSON_SORT_KEYS = False

    API_TITLE = "comsociety"
    API_VERSION = "0.1.0"
    OPENAPI_VERSION = "3.0.3"
    OPENAPI_URL_PREFIX = "/docs"
    OPENAPI_JSON_PATH = "openapi.json"
    OPENAPI_REDOC_PATH = "/redoc"
    OPENAPI_REDOC_URL = (
        "https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"
    )
    OPENAPI_SWAGGER_UI_PATH = "/swagger-ui"
    OPENAPI_SWAGGER_UI_URL = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"


class ProductionConfig(Config):
    SQLALCHEMY_URL = "postgresql+psycopg2://user:pass@postgres:5432/development"


class DevelopmentConfig(Config):
    DEBUG = True

    SQLALCHEMY_URL = "postgresql+psycopg2://user:pass@localhost:5432/development"


class TestingConfig(Config):
    TESTING = True

    SQLALCHEMY_URL = "postgresql+psycopg2://test:test@localhost:5432/test"
