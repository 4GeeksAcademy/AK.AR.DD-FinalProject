"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
# from flask import Flask, request, jsonify, url_for, Blueprint
# from api.models import db, User
# from api.utils import generate_sitemap, APIException

# api = Blueprint('api', __name__)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200


# from flask import Flask, request, jsonify, Blueprint
# from api.models import db, Country, City
# from api.utils import generate_sitemap, APIException

# api = Blueprint('api', __name__)

# @api.route('/country', methods=['POST'])
# def create_country():
#     data = request.json

#     if not data:
#         raise APIException('No data provided', status_code=400)

#     country_name = data.get('country_name')
#     city_name = data.get('city_name')

#     if not country_name or not city_name:
#         raise APIException('Missing country or city name', status_code=400)

#     country = Country.query.filter_by(name=country_name).first()

#     if not country:
#         country = Country(name=country_name)
#         db.session.add(country)
#         db.session.commit()

#     city = City(name=city_name, country=country)
#     db.session.add(city)
#     db.session.commit()

#     return jsonify({'message': 'Country and city created successfully'}), 200

# @api.route('/country/<country_name>', methods=['GET'])
# def get_country(country_name):
#     country = Country.query.filter_by(name=country_name).first()

#     if not country:
#         raise APIException('Country not found', status_code=404)

#     cities = [city.name for city in country.cities]

#     return jsonify({'country_name': country.name, 'cities': cities}), 200


from flask import Flask, request, jsonify, Blueprint
from api.models import db, Country, City, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/country', methods=['POST'])
def create_country():
    data = request.json

    if not data:
        raise APIException('No data provided', status_code=400)

    country_name = data.get('country_name')
    city_name = data.get('city_name')

    if not country_name or not city_name:
        raise APIException('Missing country or city name', status_code=400)

    country = Country.query.filter_by(name=country_name).first()

    if not country:
        country = Country(name=country_name)
        db.session.add(country)
        db.session.commit()

    existing_city = City.query.filter_by(name=city_name, country=country).first()

    if existing_city:
        return jsonify({'message': 'City already exists'}), 200

    city = City(name=city_name, country=country)
    db.session.add(city)
    db.session.commit()

    return jsonify({'message': 'Country and city created successfully'}), 200

@api.route('/country', methods=['GET'])
def get_countries():
    countries = Country.query.all()

    country_list = []
    for country in countries:
        cities = [city.name for city in country.cities]
        country_data = {
            'country_name': country.name,
            'country_img' : country.image_url,
            'cities': cities
        }
        country_list.append(country_data)

    return jsonify({'countries': country_list}), 200

# @api.route('/cities/<country_name>', methods=['GET'])
# def get_cities_by_country(country_name):
#     country = Country.query.filter_by(name=country_name).first()

#     if country:
#         cities = [city.name for city in country.cities]
#         return jsonify({'country': country.name, 'cities': cities}), 200
#     else:
#         return jsonify({'message': 'Country not found'}), 404


@api.route('/cities/<country_name>', methods=['GET'])
def get_cities_by_country(country_name):
    country = Country.query.filter_by(name=country_name).first()

    if country:
        cities = [city.name for city in country.cities]
        if cities:
            return jsonify({'country': country.name, 'cities': cities}), 200
        else:
            return jsonify({'message': 'No cities assigned to this country yet'}), 200
    else:
        return jsonify({'message': 'Country not found'}), 404
    
@api.route('/country/<country_name>', methods=['DELETE'])
def delete_country(country_name):
    country = Country.query.filter_by(name=country_name).first()

    if not country:
        return jsonify({'message': 'Country not found'}), 404

    # Eliminar todas las ciudades asociadas al país
    for city in country.cities:
        db.session.delete(city)

    # Eliminar el país
    db.session.delete(country)
    db.session.commit()

    return jsonify({'message': 'Country and associated cities deleted successfully'}), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    print(user)

    if user == None:
        return jsonify({"msg": "Could not find user with email"}), 401
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/signup", methods=["POST"])
def signup():
    body = request.get_json()
    print(body)

    user = User.query.filter_by(email=body["email"]).first()
    print(user)
    if user == None:
        user = User(email=body["email"], password=body["password"], is_active=True)
        db.session.add(user)
        db.session.commit()
        response_body = {
            "msg": "Usuario creado"
        }
        return jsonify(response_body), 200
    else:
        return jsonify({"msg": "Ya se encuentra un usuario creado con ese correo"}), 401
    
    # Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/profile", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    # return jsonify(logged_in_as=current_user), 200
    
    response_body = {
        "msg": "Usuario Logeado",
        "user": user.serialize()
    }


    return jsonify(response_body), 200


# @api.route('/api/saveImageUrl', methods=['POST'])
# def save_image_url():
#     data = request.get_json()
#     country = data['country']
#     image_url = data['imageUrl']

#     # Buscar el país en la base de datos por su nombre
#     country_obj = Country.query.filter_by(name=country).first()

#     if country_obj:
#         # Actualizar el campo image_url del país encontrado
#         country_obj.image_url = image_url
#         db.session.commit()
#         return jsonify({'message': 'URL de la imagen guardada en la base de datos'})
#     else:
#         return jsonify({'error': 'País no encontrado'})

# @api.route('/api/saveImageUrl', methods=['POST'])
# def save_image_url():
#     data = request.get_json()
#     country = data['country']
#     image_url = data['imageUrl']

#     # Buscar el país en la base de datos por su nombre
#     country_obj = Country.query.filter_by(name=country).first()

#     if country_obj:
#         # Actualizar el campo image_url del país encontrado
#         country_obj.image_url = image_url
#         db.session.commit()
#         return jsonify({'message': 'URL de la imagen guardada en la base de datos'})
#     else:
#         return jsonify({'error': 'País no encontrado'})

@api.route('/saveImageUrl', methods=['POST'])
def save_image_url():
    data = request.get_json()
    country = data['country']
    image_url = data['imageUrl']

    # Buscar el país en la base de datos por su nombre
    country_obj = Country.query.filter_by(name=country).first()

    if country_obj:
        # Actualizar el campo image_url del país encontrado
        country_obj.image_url = image_url
        db.session.commit()
        return jsonify({'message': 'URL de la imagen guardada en la base de datos'})
    else:
        return jsonify({'error': 'País no encontrado'})


   

@api.route('/hello2', methods=['POST', 'GET'])
def hello2():

    response_body = {
        "message": "hallo22"
    }

    return jsonify(response_body), 200


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
# @api.route("/login", methods=["POST"])
# def login():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)

#     user = User.query.filter_by(email=email).first()
#     print(user)

#     if user == None:
#         return jsonify({"msg": "Could not find user with email"}), 401
#     if email != user.email or password != user.password:
#         return jsonify({"msg": "Bad email or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token)

# @api.route("/signup", methods=["POST"])
# def signup():
#     body = request.get_json()
#     print(body)

#     user = User.query.filter_by(email=body["email"]).first()
#     print(user)
#     if user == None:
#         user = User(email=body["email"], password=body["password"], is_active=True)
#         db.session.add(user)
#         db.session.commit()
#         response_body = {
#             "msg": "Usuario creado"
#         }
#         return jsonify(response_body), 200
#     else:
#         return jsonify({"msg": "Ya se encuentra un usuario creado con ese correo"}), 401
    
    # Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
# @api.route("/profile", methods=["GET"])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
    
#     current_user = get_jwt_identity()
#     user = User.query.filter_by(email=current_user).first()
#     # return jsonify(logged_in_as=current_user), 200
    
#     response_body = {
#         "msg": "Usuario Logeado",
#         "user": user.serialize()
#     }


#     return jsonify(response_body), 200
