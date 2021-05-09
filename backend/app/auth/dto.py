from marshmallow import Schema, fields


class TokenCreateSchema(Schema):
    email = fields.Email(required=True, load_only=True)
    password = fields.String(required=True, load_only=True)

    class Meta:
        ordered = True


class TokenResponseSchema(Schema):
    access_token = fields.String(dump_only=True)
    refresh_token = fields.String(dump_only=True)

    class Meta:
        ordered = True


class TokenAuthorizationHeader(Schema):
    Authorization = fields.String(required=True)
