from flask_sqlalchemy import SQLAlchemy
import json

db = SQLAlchemy()

class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    image_url = db.Column(db.String(255))
    cities = db.relationship('City', backref='country', lazy=True)

    def __repr__(self):
        return f'<Country {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image_url": self.image_url
        }

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    image_url = db.Column(db.String(255))
    comments = db.relationship('Comment', backref='city', lazy=True)
    favorite_cities = db.relationship('Favorites', backref='city', lazy='dynamic')

    def __repr__(self):
        return f'<City {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country_id": self.country_id,
            "image_url": self.image_url
        }
    def serialize_id(self):
        return {
            "id": self.id,
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorite_cities = db.relationship('Favorites', backref='user', lazy='dynamic')
    user_comments = db.relationship('Comment', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)

    def __repr__(self):
        return f'<Favorites {self.city_id}>'

    def serialize(self):
        city = City.query.get(self.city_id)
        return {
            "id": self.id,
            "user_id": self.user_id,
            "city": city.serialize()
        }

# user_favorite_cities = db.Table('user_favorite_cities',
#                                 db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
#                                 db.Column('city_id', db.Integer, db.ForeignKey('city.id'), primary_key=True))

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)  # Changed to 'city_id'

    def __repr__(self):
        
        return f'<Comment {self.id}>'

    def serialize(self):
        user = User.query.get(self.user_id)
        return {
            "id": self.id,
            "content": self.content,
            "city_id": self.city_id,  # Changed to 'city_id'
            "user": user.serialize()
        }    
