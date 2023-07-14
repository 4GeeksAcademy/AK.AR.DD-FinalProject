import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const FavoriteCities = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchFavoriteCities();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">My favorite cities</h1>
      {store.favorites.map((city, index) => (
        <div key={index}>
          <h2 className="">{city.city.name}</h2>
          <img src={city.city.image_url} alt={city.city.name} />
        </div>
      ))}
    </>
  );
};
