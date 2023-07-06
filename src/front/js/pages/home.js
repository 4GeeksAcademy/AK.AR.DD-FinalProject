import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Twocountry } from "../component/twocountry";
import { CiudadxCountry } from "../component/ciudadxcountry";
import "../../styles/home.css";
import { CitybyCountry } from "../component/citybycountry";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCountries(); // Cargar países tan pronto como se cargue la página
  }, []);

  return (
    <>
    <div className="mt-5">
      <div className="row container-fluid justify-content-center">
        <div className="col-1 mx-5">
          <Link to="/city">
            <button className="btn btn-danger justify-content-right">Ciudades</button>
          </Link>
        </div>
        <div className="col-1">
          <Link to="/">
            <button className="btn btn-primary">Países</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="mt-5 container-fluid row d-flex justify-content-center">
      <Twocountry />
    </div>
    </>
    

  );
};

// import React, { useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { Twocountry } from "../component/twocountry";
// import { CiudadxCountry } from "../component/ciudadxcountry";
// import "../../styles/home.css";

// export const Home = () => {
//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     actions.loadCountries(); // Cargar países tan pronto como se cargue la página
//   }, []);

//   return (
//     <div className="cartas">
//       <Twocountry className="twocountry-container" />
//     </div>
//   );
// };