from flask import Blueprint, jsonify
from services.db_schema import db
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from services.db_schema import db

user_routes = Blueprint("user_routes", __name__)
# All routes will need JWT Authorization

@user_routes.route("/api/register", methods=["POST"]) 
def register_user():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Check if user with the same email already exists
    existing_user = db.User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "User with this email already exists"}), 400

    # Hash and salt the password
    hashed_password = generate_password_hash(password)

    # Create a new user
    new_user = db.User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"})

@user_routes.route("/api/users", methods=["GET"])
def get_users():
    users = db.User.query.all()
    return jsonify([user.to_dict() for user in users])  # assuming to_dict method in User model


@user_routes.route("/api/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = db.User.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted"})

@user_routes.route("/api/login", methods=["POST"])
def login_user():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = db.User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"error": "User not found"}), 404

    if not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid password"}), 400

    return jsonify({"message": "Login successful"})

# High Priveleged routes
@user_routes.route("/api/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = db.User.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_dict())  