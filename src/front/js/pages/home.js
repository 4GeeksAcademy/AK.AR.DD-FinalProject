// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { Twocountry } from "../component/twocountry";
// import "../../styles/home.css";

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!!</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 			<div className="alert alert-info">
// 				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
// 			</div>
// 			<p>
// 				This boilerplate comes with lots of documentation:{" "}
// 				<a href="https://start.4geeksacademy.com/starters/react-flask">
// 					Read documentation
// 				</a>
// 			</p>
// 			<Twocountry/>
// 		</div>
// 	);
// };


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
//     <div className="twocountry-container">
//     <Twocountry/>
//   </div>
//   );
// };


import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Twocountry } from "../component/twocountry";
import { CiudadxCountry } from "../component/ciudadxcountry";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCountries(); // Cargar países tan pronto como se cargue la página
  }, []);

  return (
    <div className="cartas">
      <Twocountry className="twocountry-container" />
    </div>
  );
};

