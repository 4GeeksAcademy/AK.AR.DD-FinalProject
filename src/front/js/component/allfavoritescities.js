

import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

export const AllFavoritesCities = () => {
  const { store, actions } = useContext(Context);
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    // Llama a la función getAllFavoriteCities al montar el componente
    getAllFavorites();
  }, []);

  const getAllFavorites = async () => {
    try {
      const cities = await actions.getAllFavoriteCities();
      setFavoriteCities(cities); // Almacena los datos en el estado del componente
    } catch (error) {
      console.error("Error fetching all favorite cities:", error);
    }
  };

  return (
    <>
      {favoriteCities.map((city, index) => (
        <div className="card favoritesciudades" style={{ width: "100%" }} key={index}>
          <img src={city.city.image_url} className="card-img-top" alt={city.city.name} />
          <div className="card-body">
            <h5 className="card-title">{city.city.name}</h5>
            </div>
        </div>
      
      ))}
    </>
  );
};
