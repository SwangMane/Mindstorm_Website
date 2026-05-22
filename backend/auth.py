from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_manager, login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

# -------------------------
# Create account route
# -------------------------
@auth.route("/createAccount", methods=["POST"])
@cross_origin()
def create_account():

    data = request.get_json()

    if not data:
        return jsonify({"error": "No JSON body provided"}), 400

    username = data.get("minecraft_username")
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    usernameExists = User.query.filter_by(user_name=username).first()


    if user or usernameExists:
        return jsonify({"error": "This email already exists"}), 400

    elif not username:
        return jsonify({"error": "Missing username"}), 400

    elif not email:
        return jsonify({"error": "Missing email"}), 400

    elif not password:
        return jsonify({"error": "Missing password"}), 400

    else:

      new_user = User(email=email, password=generate_password_hash(password, method="pbkdf2:sha256"), user_name=username)

      db.session.add(new_user)

      db.session.commit()

      return jsonify({
          "success": True,
          "message": "Account created"
      })

# -------------------------
# Login account route
# -------------------------
@auth.route("/login", methods=["POST"])
@cross_origin()
def login():

    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "No JSON provided"
            }), 400

        email = data.get('email')
        password = data.get('password')

        if not email or not password:
          return jsonify({
              "success": False,
              "code": "MISSING_CREDENTIALS",
              "message": "Missing credentials"
          }), 400

        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({
                "success": False,
                "message": "Email does not exist"
            }), 404
        
        if not user.password:
          return jsonify({
              "success": False,
              "message": "Password not set"
          }), 500

        if not check_password_hash(user.password, password):
          return jsonify({
              "success": False,
              "code": "INVALID_CREDENTIALS",
              "message": "Invalid email or password"
          }), 401

        elif check_password_hash(user.password, password):

          login_user(user, remember=True)
          
          return jsonify({
              "success": True,
              "message": "Login successful"
          }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": "Server error",
            "error": str(e)
        }), 500

# -------------------------
# Logout account route
# -------------------------
@auth.route("/logout", methods=["POST"])
@login_required
def logout():
    
    logout_user()


    return jsonify({"message": "Logout not implemented"}), 501