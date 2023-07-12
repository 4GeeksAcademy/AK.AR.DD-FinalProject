// import React, { useContext, useEffect } from "react";
// import { Link, useNavigate, useParams} from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
// import { Ciudades } from "./ciudades.js";

// export const Country = () => {
//   const { store, actions } = useContext(Context);
//   const countryName = useParams()
//   const selectedCountryCities = store.cities; 
//   return (
//     <>
//     {countryName.name}
//     </>
//   );
// };

// import React, { useContext, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
// import { Ciudades } from "./ciudades.js";

// export const Country = () => {
//   const { store, actions } = useContext(Context);
//   const { name } = useParams();

//   useEffect(() => {
//     actions.loadCitiesByCountry(name); // Llama a la función loadCitiesByCountry con el nombre del país como argumento
//   }, [name]);

//   const selectedCountryCities = store.selectedCountryCities;

//   return (
//     <>
//       <h1>{name}</h1>
//       {selectedCountryCities && selectedCountryCities.length > 0 ? (
//         <ul>
//           {selectedCountryCities.map((city, index) => (
//             <li key={index}>{city.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron ciudades para este país.</p>
//       )}
//     </>
//   );
// };
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


export const Country = () => {
  const { store, actions } = useContext(Context);
  const { name } = useParams();

  useEffect(() => {
    actions.loadCitiesByCountry(name); // Llama a la función loadCitiesByCountry con el nombre del país como argumento
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

  const selectedCountryCities = store.selectedCountryCities;

  return (
    <>
      <h1 className="bestplace">{name}</h1>
      {selectedCountryCities && selectedCountryCities.length > 0 ? (
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
                    <p className="datosciudad">Region: <span className= "ciudadresp">{cityWeatherData[city.name].location.region} </span></p>
                    <p className="datosciudad">Country: <span className= "ciudadresp">{cityWeatherData[city.name].location.country} </span></p>
                    <p className="datosciudad">Local Time: <span className= "ciudadresp"> {cityWeatherData[city.name].location.localtime}</span></p>
                    <p className="datosciudad">Weather: <span className= "ciudadresp">{cityWeatherData[city.name].current.condition.text} </span> </p>
                    <p className="datosciudad">Degree centigrade: <span className= "ciudadresp">{cityWeatherData[city.name].current.temp_c}°C</span></p>
                    <img className="iconoclima" src={cityWeatherData[city.name].current.condition.icon}/>
                  </>
                )}
                <div className="botones-ciudad"> 
               
                <button className="btn-load-data" onClick={() => loadCityWeatherData(city.name)}>Load Weather Data</button>
                <button className="btn-load-review">Reviews</button>
                <div>
                <FontAwesomeIcon className="comment" icon={faComment} />
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                <FontAwesomeIcon icon={faCircle} className="star-icon" />
                <FontAwesomeIcon icon={faCircle} className="star-icon" />
                <FontAwesomeIcon icon={faCircle} className="star-icon" />
                <FontAwesomeIcon icon={faCircle} className="star-icon" />
                <FontAwesomeIcon icon={faCircle} className="star-icon" />

                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron ciudades para este país.</p>
      )}
       <FontAwesomeIcon icon={faSignOutAlt} />
    </>
  );
};





