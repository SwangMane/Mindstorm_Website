from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import path

db = SQLAlchemy()

DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)

    # CONFIG
    app.config['SECRET_KEY'] = 'asdasda asdasds'
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{DB_NAME}"

    # INIT EXTENSIONS
    db.init_app(app)

    # CORS (IMPORTANT: only ONCE, HERE)
    CORS(app, resources={
        r"/*": {
            "origins": "http://localhost:3000"
        }
    })

    # BLUEPRINTS
    from .views import views
    from .auth import auth

    app.register_blueprint(views)
    app.register_blueprint(auth)

    # MODELS
    from .models import User

    # DB SETUP
    create_database(app)

    return app


def create_database(app):
    if not path.exists(DB_NAME):
        with app.app_context():
            db.create_all()
        print("Created Database!")