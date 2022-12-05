from datetime import datetime

import json

from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(32), nullable=False)
    email = db.Column(db.String(64), nullable=False)
    password = db.Column(db.Text())
    pf_picture = db.Column(db.LargeBinary)
    jwt_auth_active = db.Column(db.Boolean())
    date_joined = db.Column(db.DateTime(), default=datetime.utcnow)

    def __repr__(self):
        return f"User {self.username}"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def update_email(self, new_email):
        self.email = new_email

    def update_username(self, new_username):
        self.username = new_username

    def update_pf_picture(self, new_pf_picture):
        self.pf_picture = new_pf_picture

    def check_jwt_auth_active(self):
        return self.jwt_auth_active

    def set_jwt_auth_active(self, set_status):
        self.jwt_auth_active = set_status

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get_or_404(id)

    @classmethod
    def get_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    def toDICT(self):
        cls_dict = {}
        cls_dict['_id'] = self.id
        cls_dict['username'] = self.username
        cls_dict['email'] = self.email

        return cls_dict

    def toJSON(self):
        return self.toDICT()

class Houses(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    location = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(64), nullable=False)
    property_img = db.Column(db.LargeBinary)
    price = db.Column(db.Integer())
    annual_yield = db.Column(db.Float())
    cap_rate = db.Column(db.Float())
    description = db.Column(db.Text())   
    post_date = db.Column(db.DateTime(), default=datetime.utcnow)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update_location(self, new_location):
        self.location = new_location

    def update_email(self, new_email):
        self.email = new_email

    def update_property_img(self, new_property_img):
        self.property_img = new_property_img

    def update_price(self, new_price):
        self.price = new_price

    def update_annual_yield(self, new_annual_yield):
        self.annual_yield = new_annual_yield

    def update_cap_rate(self, new_cap_rate):
        self.cap_rate = new_cap_rate

    def update_description(self, new_description):
        self.description = new_description

    @classmethod
    def get_by_location(cls, location):
        return cls.query.filter_by(location=location).first()


        

class JWTTokenBlocklist(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    jwt_token = db.Column(db.String(), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False)

    def __repr__(self):
        return f"Expired Token: {self.jwt_token}"

    def save(self):
        db.session.add(self)
        db.session.commit()
