from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# class Country(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=True, nullable=False)
#     cities = db.relationship('City', backref='country', lazy=True)

#     def __repr__(self):
#         return f'<Country {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#         }

class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    image_url = db.Column(db.String(255))  # Campo para almacenar la URL de la imagen

    cities = db.relationship('City', backref='country', lazy=True)

    def __repr__(self):
        return f'<Country {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image_url": self.image_url  # Incluir el campo en el método serialize()
        }


# class City(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=True, nullable=False)
#     country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)

#     def __repr__(self):
#         return f'<City {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "country_id": self.country_id,
#         }

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    image_url = db.Column(db.String(255))  # Campo para almacenar la URL de la imagen

    def __repr__(self):
        return f'<City {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country_id": self.country_id,
            "image_url": self.image_url  # Incluir el campo en el método serialize()
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorite_countries = db.relationship('Country', secondary='user_favorite_countries',
                                         backref=db.backref('favorited_by', lazy='dynamic'))
    favorite_cities = db.relationship('City', secondary='user_favorite_cities',
                                      backref=db.backref('favorited_by', lazy='dynamic'))
    comments = db.relationship('Comment', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

user_favorite_countries = db.Table('user_favorite_countries',
                                   db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
                                   db.Column('country_id', db.Integer, db.ForeignKey('country.id'), primary_key=True))

user_favorite_cities = db.Table('user_favorite_cities',
                                db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
                                db.Column('city_id', db.Integer, db.ForeignKey('city.id'), primary_key=True))

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f'<Comment {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "user_id": self.user_id,
        }

# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }