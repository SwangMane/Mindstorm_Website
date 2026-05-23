from flask import Blueprint, jsonify
import requests
from flask_login import login_manager, login_required, current_user
from .models import User

views = Blueprint("views", __name__)



@views.route("/")
def homeRun():
    return jsonify({"message": "API running"})


# -------------------------
#
# Health Check | initial check to see if server is online
#
# -------------------------
@views.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "online"})


# -------------------------
#
# Home Route
#
# -------------------------
@views.route("/", methods=["GET"]) 
def home():
    return jsonify({"message": "API running"})


# -------------------------
#
# login check route
#
# -------------------------
@views.route("/userstatus", methods=["GET"])
def userstatus():
    # if the current user is logged in | cookies
    if current_user.is_authenticated:
        return jsonify({
            "logged_in": True,
            "user": current_user.user_name
        }), 200

    # if they are not logged in
    return jsonify({
        "logged_in": False
    }), 200


# -------------------------
#
# Minecraft Profile Lookup
#
# -------------------------
@views.route("/mcprofile/<username>", methods=["GET"])
def mcprofile(username):
    

    user_exists = User.query.filter_by(user_name=username).first()


    if user_exists:
        return jsonify({
            "source": "database",
            "message": "User exists in local database",
            "name": username
        }), 200



    url = (
        "https://api.minecraftservices.com/"
        f"minecraft/profile/lookup/name/{username}"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({"error": "Player not found"}), 404

    return jsonify(response.json())
