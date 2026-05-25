from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

# database structure
class User(db.Model, UserMixin):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(150), unique=True)
  password = db.Column(db.String(150))
  user_name = db.Column(db.String(150))

  user_joinDate = db.Column(db.String(150))



#class MinecraftAccounts(db.Model):
 # id = db.Column(db.Integer, primary_key=True)

  #username = db.Column(db.String(50), unique=True, nullable=False)