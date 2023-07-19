

import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

export const FavoriteCities = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchFavoriteCities();
  }, []);


  const handleDeleteFavorite = async (cityId) => {
    const deleted = actions.deleteFavorite(cityId);
    if (deleted) {
      // La ciudad fue eliminada de favoritos correctamente, puedes hacer algo aquí si es necesario
      console.log("Favorite deleted successfully!");
    } else {
      // No se pudo eliminar la ciudad de favoritos o no se encontró en la lista de favoritos
      console.log("Failed to delete favorite.");
    }
  };

  return (
    <>
    <div className="ciudadesfavoritasporusuario">
      <h1 className="text-center mt-5">Your favorite cities</h1>
      {store.favorites.length === 0 ? (
        <h2 className="text-center mt-3">You don't have any cities</h2>
      ) : (
        store.favorites.map((city, index) => (
          <div key={index}>
            <h2 className="">{city.city.name}</h2>
            <img src={city.city.image_url} alt={city.city.name} />
            <FontAwesomeIcon type="button" icon={faHeartBroken} className="iconbroken" onClick={() => handleDeleteFavorite(city.city.id)} />
          </div>
        ))
      )}
    </div>
    </>
  );
};
