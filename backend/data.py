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

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow cross-origin requests

@app.route("/health")
def health():
    return {"status": "online"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)