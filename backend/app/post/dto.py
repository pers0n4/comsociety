from marshmallow import Schema, fields


class PostSchema(Schema):
    id = fields.UUID(dump_only=True)
    author_id = fields.UUID(dump_only=True)
    subject = fields.String(required=True)
    content = fields.String(required=True)
    viewed = fields.Int(dump_only=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

    class Meta:
        ordered = True


class CreatePostSchema(Schema):
    subject = fields.String(required=True)
    content = fields.String(required=True)

    class Meta:
        ordered = True


class UpdatePostSchema(Schema):
    subject = fields.String()
    content = fields.String()

    class Meta:
        ordered = True
