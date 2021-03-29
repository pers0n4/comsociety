from marshmallow import Schema, fields


class UserSchema(Schema):
    id = fields.UUID(dump_only=True)
    id_number = fields.String(required=True)
    name = fields.String(required=True)
    email = fields.Email(required=True)
    password = fields.String(required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
    deleted_at = fields.DateTime(dump_only=True)

    class Meta:
        ordered = True


class UserCreateSchema(Schema):
    id_number = fields.String(required=True)
    name = fields.String(required=True)
    email = fields.Email(required=True)
    password = fields.String(required=True)

    class Meta:
        ordered = True


class UserUpdateSchema(Schema):
    password = fields.String()

    class Meta:
        ordered = True
