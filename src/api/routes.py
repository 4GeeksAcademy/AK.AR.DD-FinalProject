from flask import Flask, request, jsonify, Blueprint, send_file
from api.models import db, Country, City, User, Comment

from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_cors import CORS

api = Blueprint('api', __name__)
CORS(api)

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


@api.route('/cities/<country_name>', methods=['GET'])
def get_cities_by_country(country_name):
    country = Country.query.filter_by(name=country_name).first()
    

    if country:
        # cities = [city.name for city in country.cities]
        cities= City.query.filter_by(country_id=country.id).all()

        if cities:
            cities = list(map(lambda item: item.serialize(), cities))
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
    response = jsonify(access_token=access_token, user_id= user.id)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    # return jsonify(access_token=access_token)

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

    if user == None:
        return jsonify({"msg": "Could not find user with email"}), 401
    
    response_body = {
        "msg": "Usuario Logeado",
        "user": user.serialize()
    }


    return jsonify(response_body), 200

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
    
@api.route('/saveCityImageUrl', methods=['POST'])
def save_city_image_url():
    data = request.get_json()
    city_name = data['city']
    image_url = data['imageUrl']

    # Buscar la ciudad en la base de datos por su nombre
    city = City.query.filter_by(name=city_name).first()

    if city:
        # Actualizar el campo image_url de la ciudad encontrada
        city.image_url = image_url
        db.session.commit()
        return jsonify({'message': 'URL de la imagen de la ciudad guardada en la base de datos'})
    else:
        return jsonify({'error': 'Ciudad no encontrada'})
    
@api.route('/getCityImageUrl/<city>', methods=['GET'])
def get_city_image_url(city):
    # Buscar la ciudad en la base de datos por su nombre
    city_obj = City.query.filter_by(name=city).first()

    if city_obj:
        image_url = city_obj.image_url
        return jsonify({'imageUrl': image_url})
    else:
        return jsonify({'error': 'Ciudad no encontrada'})

@api.route('/getImageUrl/<country>', methods=['GET'])
def get_image_url(country):
    # Buscar el país en la base de datos por su nombre
    country_obj = Country.query.filter_by(name=country).first()

    if country_obj:
        image_url = country_obj.image_url
        return jsonify({'imageUrl': image_url })
    else:
        return jsonify({'error': 'País no encontrado'})





@api.route('/hello2', methods=['POST', 'GET'])
def hello2():

    response_body = {
        "message": "hallo22"
    }

    return jsonify(response_body), 200

comments = [
    {"id": 1, "content": "Comment 1"},
    {"id": 2, "content": "Comment 2"},
    {"id": 3, "content": "Comment 3"}
]

@api.route("/comment", methods=["GET"])
@jwt_required()
def get_comments():
    comments = Comment.query.all()
    if len(comments) == 0:
        comments = {"message": 'No comments'}
    else:
        comments = list(map(lambda item: item.serialize(), comments))
    return jsonify(comments)

@api.route("/comment/<city>", methods=["GET"])
@jwt_required()
def get_comments_city(city):
    city_id = City.query.filter_by(name=city).first()
    if city_id is None:
        return jsonify({"message": "city not found"})
    comments = Comment.query.filter_by(city=city_id).all()
    if len(comments) == 0:
        comments = {"message": 'No comments'}
    else:
        comments = list(map(lambda item: item.serialize(), comments))
    return jsonify(comments)


@api.route("/comment", methods=["POST"])
@jwt_required()
def create_comment():
    # new_comment_data = request.json
    content = request.json["content"]
    city_id = request.json["city_id"]
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    # Retrieve the city with the given city_id
    city = City.query.filter_by(name=city_id).first()

    if user is None or city is None:
        return jsonify({"message": "User or City not found"}), 404

    new_comment = Comment(content=content, user_id=user.id, city_id=city.id)
    db.session.add(new_comment)
    db.session.commit()
    return jsonify({"message": "Comment created successfully"})


@api.route("/comment", methods=["DELETE"])
@jwt_required()
def delete_comment():

    return jsonify({"message": "Comment deleted successfully"})
