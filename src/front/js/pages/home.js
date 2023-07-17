
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Twocountry } from "../component/twocountry";
import { CiudadxCountry } from "../component/ciudadxcountry";
import "../../styles/home.css";
import { CitybyCountry } from "../component/citybycountry";
import { FavoriteCities } from "../component/favoritecities";
import { AllFavoritesCities } from "../component/allfavoritescities";
import baner from "../../img/baner.jpg";
import { Buscador } from "./buscador";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCountries();
    console.log('prueba');
  }, []);

  return (
    <>
      <div className="mt-5">
        <img className="baner" src={baner}/>
        <div className="buscador-container">
          <div className="buscador-content">
            <Buscador />
          </div>
        </div>
      </div>
      <h1 className="bestplace">Countries <span className="bestpalcespan">to choose from</span></h1>
      <div className="contenedorpais container">
        <Twocountry className="twocountry" />
      </div>
      <h1 className="bestplace">Nomads' <span className="bestpalcespan">favorite cities</span></h1>
      <div className="contenedorciudad container">
        <AllFavoritesCities/>
      </div>
    </>
  );
};

