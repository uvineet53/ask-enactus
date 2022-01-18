from flask import Blueprint,Flask, render_template, request, redirect, url_for, flash
from . import db
from .models import questions
import os

views = Blueprint("views", __name__)

@views.route("/", methods=['POST', 'GET'])
def landing():
    if request.method == 'POST':
        question = request.form.get("question")
        new_question = questions(questions=question)
        db.session.add(new_question)
        db.session.commit()
        flash("Your question is recieved!!")
        return redirect(url_for('views.landing'))
    return render_template("index.html")