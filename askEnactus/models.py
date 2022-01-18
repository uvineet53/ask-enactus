from enum import unique
from flask import url_for
from sqlalchemy.orm import defaultload
from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class questions(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    questions = db.Column(db.String(300), nullable=False)
