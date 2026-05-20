## to run flask server
##
## To install flask -> pip install flask
## to upgrade flask -> python.exe -m pip install --upgrade pip
## to install flask cors -> pip install flask flask-cors

## to delete current venv path  -> rmdir /s /q venv

##
## 1. python -m venv venv
## 2. venv\Scripts\activate  
## 3. set FLASK_APP=data.py
## 4. flask run
##
## 1. cmd > cd to directory
## 2. start venv script
## 3. set correct py script
## 4. flask run

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # allow cross-origin requests

@app.route("/health")
def health():
    return {"status": "online"}


@app.route("/createAccount", methods=['GET', 'POST'])
def createAccount():

    data = request.json

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({
            "error": "Missing username or password"
        }), 400

    return jsonify({
        "success": True,
        "message": "Account created"
    })

@app.route("/login", methods=['GET', 'POST'])
def login():
    return ""

@app.route("/logout")
def logout():
    return ""


@app.route("/mcprofile/<username>")
def mcprofile(username):

    url = f"https://api.minecraftservices.com/minecraft/profile/lookup/name/{username}"

    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({
            "error": "Player not found"
        }), 404

    return jsonify(response.json())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)