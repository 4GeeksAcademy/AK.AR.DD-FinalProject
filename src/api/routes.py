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
from api.models import db, Country, City
from api.utils import generate_sitemap, APIException

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


# @api.route('/country/<country_name>', methods=['GET'])
# def get_country(country_name):
#     country = Country.query.filter_by(name=country_name).first()

#     if not country:
#         raise APIException('Country not found', status_code=404)

#     cities = [city.name for city in country.cities]

#     return jsonify({'country_name': country.name, 'cities': cities}), 200


@api.route('/country', methods=['GET'])
def get_countries():
    countries = Country.query.all()

    country_list = []
    for country in countries:
        cities = [city.name for city in country.cities]
        country_data = {
            'country_name': country.name,
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







