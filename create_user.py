from flask import Flask, render_template, request 
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://samms:Dzattrq87#@127.0.0.1:3306/WINE'

db = SQLAlchemy(app)
class User(db.model):
    id = db.Column('user_id', db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    city = db.Column(db.String(256))
    email = db.Column(db.String(256))
def __init__(self, name, city, email):
    self.name = name
    self.city = city
    self.email = email

db.create_all()
