import json
from flask import Blueprint, render_template

offers_bp = Blueprint('offers', __name__, url_prefix='/offers')

@offers_bp.route("/")
def offers():
    with open("data/offers.json", "r") as f:
        offers = json.load(f)
    return render_template("offers.html", offers=offers)
