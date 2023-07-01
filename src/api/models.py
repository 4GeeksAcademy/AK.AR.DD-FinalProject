import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class Country(Base):
    __tablename__='country'
    country_id = Column(Integer, primary_key=True, nullable=False)
    capital_city = Column(String(250), nullable=False)
    region  = Column(String(250), nullable=False)
    language = Column(String(250), nullable=False)
    population = Column(Integer, nullable=False)
    currency = Column(String(250), nullable=False)
    weather = Column(String(250), nullable=False)

class City(Base):
    __tablename__='city'
    city_id = Column(Integer, primary_key=True)
    country = Column(String(250), ForeignKey('country'))
    population = Column(Integer, nullable=False)
    life_cost = Column(Integer, nullable=False)
    relationship(Country)


    def __repr__(self):
        return f'<User {self.email}>'

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "email": self.email,
    #         # do not serialize the password, its a security breach
    #     }