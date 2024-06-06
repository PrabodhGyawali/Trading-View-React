from flask import Blueprint, jsonify
from services.db_schema import db

db_routes = Blueprint("db_routes", __name__)

@db_routes.route("/api/data", methods=["GET"])
def get_data():
    data = db.session.query("SELECT * FROM User")
    return jsonify(data)