
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Ciudades } from "./ciudades.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Comentario } from "../component/comentario.jsx";
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FavoriteCities } from "../component/favoritecities";// Importar el componente FavoriteCities
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const Country = () => {
  const { store, actions } = useContext(Context);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    actions.loadCitiesByCountry(name);
  }, [name]);

  const [cityWeatherData, setCityWeatherData] = useState({});

  const loadCityWeatherData = async (cityName) => {
    try {
      const data = await actions.loadCityWeather(cityName);
      setCityWeatherData((prevState) => ({
        ...prevState,
        [cityName]: data
      }));
    } catch (error) {
      console.error(`Error loading weather data for ${cityName}:`, error);
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log("send Data");
    navigate("/login");
  };

  const handleGoToCommentFeed = (cityName) => {
    navigate(`/${name}/${cityName}/comentario/`);
  };

  const selectedCountryCities = store.selectedCountryCities;

  const handleUser = (id) => {
    actions.addFavorite(id);
  };

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

  const [showFavoriteCities, setShowFavoriteCities] = useState(false);

  const handleShowFavoriteCities = () => {
    setShowFavoriteCities(!showFavoriteCities);
  };

  return (
    <>
      <h1 className="bestplace">{name}</h1>

      {/* Renderizado de las ciudades favoritas */}
      {showFavoriteCities && <FavoriteCities />}

      {/* Renderizado de las ciudades del país seleccionado */}
      {!showFavoriteCities && selectedCountryCities && selectedCountryCities.length > 0 ? (
        <div>
          {selectedCountryCities.map((city, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <h5 className="card-title">{city.name}</h5>
              </div>
              <div className="card-body cityinfo">
                <img className="ciudadimg" src={store.selectedCountryCities[index].image_url} />

                {cityWeatherData[city.name] && (
                  <>
                    <p className="datosciudad">Region: <span className="ciudadresp">{cityWeatherData[city.name].location.region} </span></p>
                    <p className="datosciudad">Country: <span className="ciudadresp">{cityWeatherData[city.name].location.country} </span></p>
                    <p className="datosciudad">Local Time: <span className="ciudadresp"> {cityWeatherData[city.name].location.localtime}</span></p>
                    <p className="datosciudad">Weather: <span className="ciudadresp">{cityWeatherData[city.name].current.condition.text} </span> </p>
                    <p className="datosciudad">Degree centigrade: <span className="ciudadresp">{cityWeatherData[city.name].current.temp_c}°C</span></p>
                    <img className="iconoclima" src={cityWeatherData[city.name].current.condition.icon} />
                  </>
                )}
                <div className="botones-ciudad">
                  <button className="btn-load-data" onClick={() => loadCityWeatherData(city.name)}>Load Weather Data</button>
                  <div>
                    <FontAwesomeIcon type="button" className="iconcomment" icon={faComment} onClick={() => handleGoToCommentFeed(city.name)} />
                    <FontAwesomeIcon type="button" icon={faHeart} className="heart-icon btn-add-favorite" onClick={() => handleUser(city.id)} />
                    <FontAwesomeIcon type="button" icon={faHeartBroken} className="iconbroken" onClick={() => handleDeleteFavorite(city.id)} />
                    <FontAwesomeIcon  type="button" className="iconcities" icon={faGlobe} onClick={handleShowFavoriteCities} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </>
  );
};

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
// import { Ciudades } from "./ciudades.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { Comentario } from "../component/comentario.jsx";
// import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
// import { FavoriteCities } from "../component/favoritecities";// Importar el componente FavoriteCities
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// export const Country = () => {
//   const { store, actions } = useContext(Context);
//   const { name } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     actions.loadCitiesByCountry(name);
//   }, [name]);

//   const [cityWeatherData, setCityWeatherData] = useState({});

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const data = await actions.loadCityWeather(cityName);
//       setCityWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error(`Error loading weather data for ${cityName}:`, error);
//     }
//   };

//   const sendData = (e) => {
//     e.preventDefault();
//     console.log("send Data");
//     navigate("/login");
//   };

//   const handleGoToCommentFeed = (cityName) => {
//     navigate(`/${name}/${cityName}/comentario/`);
//   };

//   const selectedCountryCities = store.selectedCountryCities;

//   const handleUser = (id) => {
//     actions.addFavorite(id);
//   };

//   const handleDeleteFavorite = async (cityId) => {
//     const deleted = actions.deleteFavorite(cityId);
//     if (deleted) {
//       // La ciudad fue eliminada de favoritos correctamente, puedes hacer algo aquí si es necesario
//       console.log("Favorite deleted successfully!");
//     } else {
//       // No se pudo eliminar la ciudad de favoritos o no se encontró en la lista de favoritos
//       console.log("Failed to delete favorite.");
//     }
//   };

//   const [showFavoriteCities, setShowFavoriteCities] = useState(false);

//   const handleShowFavoriteCities = () => {
//     if (store.isAuthenticated) {
//       setShowFavoriteCities(!showFavoriteCities);
//     } else {
//       alert("Debes estar logeado para ver tus ciudades favoritas.");
//     }
//   };

//   return (
//     <>
//       <h1 className="bestplace">{name}</h1>

//       {/* Renderizado de las ciudades favoritas */}
//       {showFavoriteCities && <FavoriteCities />}

//       {/* Renderizado de las ciudades del país seleccionado */}
//       {!showFavoriteCities && selectedCountryCities && selectedCountryCities.length > 0 ? (
//         <div>
//           {selectedCountryCities.map((city, index) => (
//             <div className="card" key={index}>
//               <div className="card-header">
//                 <h5 className="card-title">{city.name}</h5>
//               </div>
//               <div className="card-body cityinfo">
//                 <img className="ciudadimg" src={store.selectedCountryCities[index].image_url} />

//                 {cityWeatherData[city.name] && (
//                   <>
//                     <p className="datosciudad">Region: <span className="ciudadresp">{cityWeatherData[city.name].location.region} </span></p>
//                     <p className="datosciudad">Country: <span className="ciudadresp">{cityWeatherData[city.name].location.country} </span></p>
//                     <p className="datosciudad">Local Time: <span className="ciudadresp"> {cityWeatherData[city.name].location.localtime}</span></p>
//                     <p className="datosciudad">Weather: <span className="ciudadresp">{cityWeatherData[city.name].current.condition.text} </span> </p>
//                     <p className="datosciudad">Degree centigrade: <span className="ciudadresp">{cityWeatherData[city.name].current.temp_c}°C</span></p>
//                     <img className="iconoclima" src={cityWeatherData[city.name].current.condition.icon} />
//                   </>
//                 )}
//                 <div className="botones-ciudad">
//                   <button className="btn-load-data" onClick={() => loadCityWeatherData(city.name)}>Load Weather Data</button>
//                   <div>
//                     <FontAwesomeIcon type="button" className="iconcomment" icon={faComment} onClick={() => handleGoToCommentFeed(city.name)} />
//                     <FontAwesomeIcon type="button" icon={faHeart} className="heart-icon btn-add-favorite" onClick={() => handleUser(city.id)} />
//                     <FontAwesomeIcon type="button" icon={faHeartBroken} className="iconbroken" onClick={() => handleDeleteFavorite(city.id)} />
//                     <FontAwesomeIcon  type="button" className="iconcities" icon={faGlobe} onClick={handleShowFavoriteCities} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p></p>
//       )}

//       <Link to="/">
//         <span className="btn btn-primary btn-lg" href="#" role="button">
//           Back home
//         </span>
//       </Link>
//     </>
//   );
// };

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
// import { Ciudades } from "./ciudades.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { Comentario } from "../component/comentario.jsx";
// import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
// import { FavoriteCities } from "../component/favoritecities";
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// export const Country = () => {
//   const { store, actions } = useContext(Context);
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visualización de la alerta

//   useEffect(() => {
//     actions.loadCitiesByCountry(name);
//   }, [name]);

//   const handleGoToCommentFeed = (cityName) => {
//     navigate(`/${name}/${cityName}/comentario/`);
//   };

//   const selectedCountryCities = store.selectedCountryCities;

//   const handleUser = (id) => {
//     actions.addFavorite(id);
//   };

//   const handleDeleteFavorite = async (cityId) => {
//     const deleted = actions.deleteFavorite(cityId);
//     if (deleted) {
//       // La ciudad fue eliminada de favoritos correctamente, puedes hacer algo aquí si es necesario
//       console.log("Favorite deleted successfully!");
//     } else {
//       // No se pudo eliminar la ciudad de favoritos o no se encontró en la lista de favoritos
//       console.log("Failed to delete favorite.");
//     }
//   };

//   const [showFavoriteCities, setShowFavoriteCities] = useState(false);

//   const handleShowFavoriteCities = () => {
//     if (store.isAuthenticated) {
//       setShowFavoriteCities(!showFavoriteCities);
//     } else {
//       setShowAlert(true); // Mostrar la alerta si no está logeado
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const data = await actions.loadCityWeather(cityName);
//       setCityWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error(`Error loading weather data for ${cityName}:`, error);
//     }
//   };

//   const [cityWeatherData, setCityWeatherData] = useState({});

//   return (
//     <>
//       <h1 className="bestplace">{name}</h1>

//       {showAlert && (
//         <div className="alert alert-danger" role="alert">
//           Debes estar logeado para ver tus ciudades favoritas.
//         </div>
//       )}

//       {showFavoriteCities && <FavoriteCities />}

//       {!showFavoriteCities && selectedCountryCities && selectedCountryCities.length > 0 ? (
//         <div>
//           {selectedCountryCities.map((city, index) => (
//             <div className="card" key={index}>
//               <div className="card-header">
//                 <h5 className="card-title">{city.name}</h5>
//               </div>
//               <div className="card-body cityinfo">
//                 <img className="ciudadimg" src={store.selectedCountryCities[index].image_url} />

//                 {cityWeatherData[city.name] && (
//                   <>
//                     <p className="datosciudad">Region: <span className="ciudadresp">{cityWeatherData[city.name].location.region} </span></p>
//                     <p className="datosciudad">Country: <span className="ciudadresp">{cityWeatherData[city.name].location.country} </span></p>
//                     <p className="datosciudad">Local Time: <span className="ciudadresp"> {cityWeatherData[city.name].location.localtime}</span></p>
//                     <p className="datosciudad">Weather: <span className="ciudadresp">{cityWeatherData[city.name].current.condition.text} </span> </p>
//                     <p className="datosciudad">Degree centigrade: <span className="ciudadresp">{cityWeatherData[city.name].current.temp_c}°C</span></p>
//                     <img className="iconoclima" src={cityWeatherData[city.name].current.condition.icon} />
//                   </>
//                 )}
//                 <div className="botones-ciudad">
//                   <button className="btn-load-data" onClick={() => loadCityWeatherData(city.name)}>Load Weather Data</button>
//                   <div>
//                     <FontAwesomeIcon type="button" className="iconcomment" icon={faComment} onClick={() => handleGoToCommentFeed(city.name)} />
//                     <FontAwesomeIcon type="button" icon={faHeart} className="heart-icon btn-add-favorite" onClick={() => handleUser(city.id)} />
//                     <FontAwesomeIcon type="button" icon={faHeartBroken} className="iconbroken" onClick={() => handleDeleteFavorite(city.id)} />
//                     <FontAwesomeIcon  type="button" className="iconcities" icon={faGlobe} onClick={handleShowFavoriteCities} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No hay ciudades para mostrar.</p>
//       )}

//       <Link to="/">
//         <span className="btn btn-primary btn-lg" href="#" role="button">
//           Back home
//         </span>
//       </Link>
//     </>
//   );
// };

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
// import { Ciudades } from "./ciudades.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { Comentario } from "../component/comentario.jsx";
// import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
// import { FavoriteCities } from "../component/favoritecities";
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// export const Country = () => {
//   const { store, actions } = useContext(Context);
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visualización de la alerta

//   useEffect(() => {
//     actions.loadCitiesByCountry(name);
//   }, [name]);

//   const handleGoToCommentFeed = (cityName) => {
//     navigate(`/${name}/${cityName}/comentario/`);
//   };

//   const selectedCountryCities = store.selectedCountryCities;

//   const handleUser = (id) => {
//     if (store.isAuthenticated) {
//       actions.addFavorite(id);
//     } else {
//       setShowAlert(true); // Mostrar la alerta si no está logeado
//     }
//   };

//   const handleDeleteFavorite = async (cityId) => {
//     if (store.isAuthenticated) {
//       const deleted = actions.deleteFavorite(cityId);
//       if (deleted) {
//         // La ciudad fue eliminada de favoritos correctamente, puedes hacer algo aquí si es necesario
//         console.log("Favorite deleted successfully!");
//       } else {
//         // No se pudo eliminar la ciudad de favoritos o no se encontró en la lista de favoritos
//         console.log("Failed to delete favorite.");
//       }
//     } else {
//       setShowAlert(true); // Mostrar la alerta si no está logeado
//     }
//   };

//   const [showFavoriteCities, setShowFavoriteCities] = useState(false);

//   const handleShowFavoriteCities = () => {
//     if (store.isAuthenticated) {
//       setShowFavoriteCities(!showFavoriteCities);
//     } else {
//       setShowAlert(true); // Mostrar la alerta si no está logeado
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const data = await actions.loadCityWeather(cityName);
//       setCityWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error(`Error loading weather data for ${cityName}:`, error);
//     }
//   };

//   const [cityWeatherData, setCityWeatherData] = useState({});

//   return (
//     <>
//       <h1 className="bestplace">{name}</h1>

//       {showAlert && (
//         <div className="alert alert-danger" role="alert">
//           Debes estar logeado para hacer eso .
//         </div>
//       )}

//       {showFavoriteCities && <FavoriteCities />}

//       {!showFavoriteCities && selectedCountryCities && selectedCountryCities.length > 0 ? (
//         <div>
//           {selectedCountryCities.map((city, index) => (
//             <div className="card" key={index}>
//               <div className="card-header">
//                 <h5 className="card-title">{city.name}</h5>
//               </div>
//               <div className="card-body cityinfo">
//                 <img className="ciudadimg" src={store.selectedCountryCities[index].image_url} />

//                 {cityWeatherData[city.name] && (
//                   <>
//                     <p className="datosciudad">Region: <span className="ciudadresp">{cityWeatherData[city.name].location.region} </span></p>
//                     <p className="datosciudad">Country: <span className="ciudadresp">{cityWeatherData[city.name].location.country} </span></p>
//                     <p className="datosciudad">Local Time: <span className="ciudadresp"> {cityWeatherData[city.name].location.localtime}</span></p>
//                     <p className="datosciudad">Weather: <span className="ciudadresp">{cityWeatherData[city.name].current.condition.text} </span> </p>
//                     <p className="datosciudad">Degree centigrade: <span className="ciudadresp">{cityWeatherData[city.name].current.temp_c}°C</span></p>
//                     <img className="iconoclima" src={cityWeatherData[city.name].current.condition.icon} />
//                   </>
//                 )}
//                 <div className="botones-ciudad">
//                   <button className="btn-load-data" onClick={() => loadCityWeatherData(city.name)}>Load Weather Data</button>
//                   <div>
//                     <FontAwesomeIcon type="button" className="iconcomment" icon={faComment} onClick={() => handleGoToCommentFeed(city.name)} />
//                     <FontAwesomeIcon type="button" icon={faHeart} className="heart-icon btn-add-favorite" onClick={() => handleUser(city.id)} />
//                     <FontAwesomeIcon type="button" icon={faHeartBroken} className="iconbroken" onClick={() => handleDeleteFavorite(city.id)} />
//                     <FontAwesomeIcon type="button" className="iconcities" icon={faGlobe} onClick={handleShowFavoriteCities} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No hay ciudades para mostrar.</p>
//       )}

//       <Link to="/">
//         <span className="btn btn-primary btn-lg" href="#" role="button">
//           Back home
//         </span>
//       </Link>
//     </>
//   );
// };
