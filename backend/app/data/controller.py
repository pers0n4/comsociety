from functools import reduce

from flask.views import MethodView
from flask_smorest import Blueprint
from marshmallow import Schema, fields

from textrank import concat, keyword_summarizer, sentence_summarizer

bp = Blueprint("data", __name__, url_prefix="/data")


class DataSchema(Schema):
    data = fields.List(fields.String(load_only=True))
    sentences = fields.List(
        fields.Tuple((fields.String(), fields.Number(), fields.String()))
    )
    keywords = fields.List(fields.Tuple((fields.String(), fields.Number())))


@bp.route("/")
class DataController(MethodView):
    @bp.arguments(DataSchema)
    @bp.response(200, DataSchema)
    def post(self, data):
        sentences = sentence_summarizer.summarize(data["data"], topk=10)
        sentences = reduce(concat, sentences, [])
        keywords = keyword_summarizer.summarize(data["data"], topk=30)

        return {
            "sentences": sentences,
            "keywords": keywords,
        }
