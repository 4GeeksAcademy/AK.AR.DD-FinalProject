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
        </div>
        <div className="col-1">
        </div>
      </div>
    </div>
    <h1 className="bestplace">The best <span className="bestpalcespan">places</span></h1>
    <div className="contenedorpais ">
      <Twocountry className="twocountry" />
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