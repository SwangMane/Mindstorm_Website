from flask import Blueprint, jsonify
import requests
from flask_login import login_manager, login_required, current_user
from .models import User

views = Blueprint("views", __name__)



@views.route("/")
def homeRun():
    return jsonify({"message": "API running"})

# -------------------------
# Health Check
# -------------------------
@views.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "online"})


# -------------------------
# Home Route
# -------------------------
@views.route("/", methods=["GET"])
def home():
    return jsonify({"message": "API running"})


# -------------------------
# Minecraft Profile Lookup
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
