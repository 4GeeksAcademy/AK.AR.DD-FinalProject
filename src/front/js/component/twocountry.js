// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});

//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   const handleClickCities = (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     loadWeatherData(countryName);
//   };

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   return (
//     <>
//       {paises.map((pais, index) => (
//         <div key={index} className="card" style={{ width: "100%" }}>
//           <img src={pais.country_img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h2 className="card-title">{pais.country_name}</h2>
//             <div className="card-text">
//               {weatherData[pais.country_name] && (
//                 <>
//                   <h5>Region: {weatherData[pais.country_name].location.region}</h5>
//                   <h5>Country: {weatherData[pais.country_name].location.country}</h5>
//                   <h5>Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//                   <h5>Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//                   <h5>Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//                   <h5>Currency: {countryDetails.currencies[0].name}</h5>
//                   <h5>Languages: {countryDetails.languages.map((lang) => lang.name).join(", ")}</h5>
                  
//                   <img src={weatherData[pais.country_name].current.condition.icon} alt="Weather Icon" />
//                 </>
//               )}
//             </div>
//             <button className="btn btn-primary" onClick={() => handleClickCities(pais.country_name)}>
//               More Information
//             </button>
//           </div>
//         </div>
//       ))}

//       {selectedCountry && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Cities</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={() => setSelectedCountry(null)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 {selectedCountryCities.length === 0 ? (
//                   <p>No cities available for {selectedCountry}</p>
//                 ) : (
//                   selectedCountryCities.map((city, index) => (
//                     <div key={index}>
//                       <h5>Ciudad: {city}</h5>
//                       {weatherData[city] && (
//                         <>
//                           <p>Region: {weatherData[city].location.region}</p>
//                           <p>Country: {weatherData[city].location.country}</p>
//                           <p>Local Time: {weatherData[city].location.localtime}</p>
//                           <p>Weather: {weatherData[city].current.condition.text}</p>
//                           <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                         </>
//                       )}
//                       <button onClick={() => loadCityWeatherData(city)}>Load Weather Data</button>
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                   onClick={() => setSelectedCountry(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});

//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   const handleClickCities = (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     loadWeatherData(countryName);
//   };

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   return (
//     <>
//       {paises.map((pais, index) => (
//         <div key={index} className="card" style={{ width: "100%" }}>
//           <img src={pais.country_img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h2 className="card-title">{pais.country_name}</h2>
//             <div className="card-text">
//               {weatherData[pais.country_name] && (
//                 <>
//                   <h5>Region: {weatherData[pais.country_name].location.region}</h5>
//                   <h5>Country: {weatherData[pais.country_name].location.country}</h5>
//                   <h5>Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//                   <h5>Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//                   <h5>Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//                   {pais.details && (
//                     <>
//                       <h5>Currency: {pais.details.currencies[0].name}</h5>
//                       <h5>Languages: {pais.details.languages.map((lang) => lang.name).join(", ")}</h5>
//                     </>
//                   )}
//                   <img src={weatherData[pais.country_name].current.condition.icon} alt="Weather Icon" />
//                 </>
//               )}
//             </div>
//             <button className="btn btn-primary" onClick={() => handleClickCities(pais.country_name)}>
//               More Information
//             </button>
//           </div>
//         </div>
//       ))}

//       {selectedCountry && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Cities</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={() => setSelectedCountry(null)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 {selectedCountryCities.length === 0 ? (
//                   <p>No cities available for {selectedCountry}</p>
//                 ) : (
//                   selectedCountryCities.map((city, index) => (
//                     <div key={index}>
//                       <h5>Ciudad: {city}</h5>
//                       {weatherData[city] && (
//                         <>
//                           <p>Region: {weatherData[city].location.region}</p>
//                           <p>Country: {weatherData[city].location.country}</p>
//                           <p>Local Time: {weatherData[city].location.localtime}</p>
//                           <p>Weather: {weatherData[city].current.condition.text}</p>
//                           <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                         </>
//                       )}
//                       <button onClick={() => loadCityWeatherData(city)}>Load Weather Data</button>
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                   onClick={() => setSelectedCountry(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [paisDetails, setPaisDetails] = useState({});
//   const [showCountryInfo, setShowCountryInfo] = useState(true);



//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   const handleClickCities = (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     loadWeatherData(countryName);
//     loadCountryDetails(countryName); // Llama a la función para obtener los detalles del país
//   };

//   // const handleClickCities = (countryName) => {
//   //   if (countryName === null) {
//   //     setSelectedCountry(null);
//   //     setShowCountryInfo(true); // Agrega esta línea
//   //   } else {
//   //     actions.loadCitiesByCountry(countryName);
//   //     setSelectedCountry(countryName);
//   //     loadWeatherData(countryName);
//   //     loadCountryDetails(countryName);
//   //     setShowCountryInfo(false); // Agrega esta línea
//   //   }
//   // };
  

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCountryDetails = async (countryName) => {
//     try {
//       const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
//       const details = await response.json();
//       setPaisDetails((prevState) => ({
//         ...prevState,
//         [countryName]: details[0]
//       }));
//     } catch (error) {
//       console.error("Error loading country details:", error);
//     }
//   };
  

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   return (
//     <>
//     {paises.map((pais, index) => (
//       <div key={index} className="card twocountry" style={{ width: "100%" }}>
//         <button className="close-button" >
//   <i className="fas fa-times"></i>
// </button>
//         <img src={pais.country_img} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h2 className="card-title">{pais.country_name}</h2>
//           {showCountryInfo && weatherData[pais.country_name] && (
//   <div className="card-text">
//     <h5 className="datos">Region: {weatherData[pais.country_name].location.region}</h5>
//     <h5 className="datos">Country: {weatherData[pais.country_name].location.country}</h5>
//     <h5 className="datos">Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//     <h5 className="datos">Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//     <h5 className="datos">Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//     {paisDetails[pais.country_name] && (
//       <>
//         <h5 className="datos">Currency: {paisDetails[pais.country_name].currencies[0].name}</h5>
//         <h5 className="datos">Languages: {paisDetails[pais.country_name].languages.map((lang) => lang.name).join(", ")}</h5>
//       </>
//     )}
//     <img src={weatherData[pais.country_name].current.condition.icon} alt="Weather Icon" />
//   </div>

//               )}
//             </div>
//             <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
//               More Information
//             </button>
//           </div>
      
//       ))}

//       {selectedCountry && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Cities</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={() => setSelectedCountry(null)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 {selectedCountryCities.length === 0 ? (
//                   <p>No cities available for {selectedCountry}</p>
//                 ) : (
//                   selectedCountryCities.map((city, index) => (
//                     <div key={index}>
//                       <h5>Ciudad: {city}</h5>
//                       {weatherData[city] && (
//                         <>
//                           <p>Region: {weatherData[city].location.region}</p>
//                           <p>Country: {weatherData[city].location.country}</p>
//                           <p>Local Time: {weatherData[city].location.localtime}</p>
//                           <p>Weather: {weatherData[city].current.condition.text}</p>
//                           <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                         </>
//                       )}
//                       <button onClick={() => loadCityWeatherData(city)}>Load Weather Data</button>
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                   onClick={() => setSelectedCountry(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";


// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [paisDetails, setPaisDetails] = useState({});

//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   const handleClickCities = (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     loadWeatherData(countryName);
//     loadCountryDetails(countryName);
//   };

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCountryDetails = async (countryName) => {
//     try {
//       const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
//       const details = await response.json();
//       setPaisDetails((prevState) => ({
//         ...prevState,
//         [countryName]: details[0]
//       }));
//     } catch (error) {
//       console.error("Error loading country details:", error);
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const handleClearData = () => {
//     setWeatherData({});
//     setPaisDetails({});
//   };

//   return (
//     <>
//       {paises.map((pais, index) => (
//         <div key={index} className="card twocountry" style={{ width: "100%" }}>
//           <button className="close-button " onClick={handleClearData} >
//   <i className="fas fa-times"></i>
// </button>
//           <img src={pais.country_img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h2 className="card-title">{pais.country_name}</h2>
//             <div className="card-text">
//               {weatherData[pais.country_name] && (
//                 <>
//                   <h5 className="datos">Region: {weatherData[pais.country_name].location.region}</h5>
//                   <h5 className="datos">Country: {weatherData[pais.country_name].location.country}</h5>
//                   <h5 className="datos">Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//                   <h5 className="datos">Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//                   <h5 className="datos">Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//                   {paisDetails[pais.country_name] && (
//                     <>
//                       <h5 className="datos">Currency: {paisDetails[pais.country_name].currencies[0].name}</h5>
//                       <h5 className="datos">Languages: {paisDetails[pais.country_name].languages.map((lang) => lang.name).join(", ")}</h5>
//                     </>
//                   )}
//                 </>
//               )}
//             </div>
//             <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
//               More Information
//             </button>
//             {/* <button className="btn clear" onClick={handleClearData}>
//                 Clear Data
//               </button> */}
           
//           </div>
//         </div>
//       ))}

//       {selectedCountry && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title">Cities</h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={() => setSelectedCountry(null)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 {selectedCountryCities.length === 0 ? (
//                   <p>No cities available for {selectedCountry}</p>
//                 ) : (
//                   selectedCountryCities.map((city, index) => (
//                     <div key={index}>
//                       <h2>Ciudad: {city}</h2>
//                       {weatherData[city] && (
//                         <>
//                           <p>Region: {weatherData[city].location.region}</p>
//                           <p>Country: {weatherData[city].location.country}</p>
//                           <p>Local Time: {weatherData[city].location.localtime}</p>
//                           <p>Weather: {weatherData[city].current.condition.text}</p>
//                           <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                         </>
//                       )}
//                       <button onClick={() => loadCityWeatherData(city)}>Load Weather Data</button>
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                   onClick={() => setSelectedCountry(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// // import { Ciudades } from "../pages/Ciudades.js";
// import {Ciudades} from "../pages/ciudades.js"



// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [paisDetails, setPaisDetails] = useState({});
//   const [showCiudades, setShowCiudades] = useState(false);

//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   // const handleClickCities = (countryName) => {
//   //   actions.loadCitiesByCountry(countryName);
//   //   setSelectedCountry(countryName);
//   //   loadWeatherData(countryName);
//   //   loadCountryDetails(countryName);
//   // };

//   const handleClickCities = (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     loadWeatherData(countryName);
//     loadCountryDetails(countryName);
//     setShowCiudades(true); // Nuevo código
//   };

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCountryDetails = async (countryName) => {
//     try {
//       const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
//       const details = await response.json();
//       setPaisDetails((prevState) => ({
//         ...prevState,
//         [countryName]: details[0]
//       }));
//     } catch (error) {
//       console.error("Error loading country details:", error);
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const handleClearData = () => {
//     setWeatherData({});
//     setPaisDetails({});
//   };

//   return (
//     <>
//       {paises.map((pais, index) => (
//         <div key={index} className="card twocountry" style={{ width: "100%" }}>
//           <button className="close-button" onClick={handleClearData}>
//             <i className="fas fa-times"></i>
//           </button>
//           <img src={pais.country_img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h2 className="card-title">{pais.country_name}</h2>
//             <div className="card-text">
//               {weatherData[pais.country_name] && (
//                 <>
//                   <h5 className="datos">Region: {weatherData[pais.country_name].location.region}</h5>
//                   <h5 className="datos">Country: {weatherData[pais.country_name].location.country}</h5>
//                   <h5 className="datos">Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//                   <h5 className="datos">Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//                   <h5 className="datos">Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//                   {paisDetails[pais.country_name] && (
//                     <>
//                       <h5 className="datos">Currency: {paisDetails[pais.country_name].currencies[0].name}</h5>
//                       <h5 className="datos">
//                         Languages: {paisDetails[pais.country_name].languages.map((lang) => lang.name).join(", ")}
//                       </h5>
//                     </>
//                   )}
//                 </>
//               )}
//             </div>
//             <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
//               More Information
//             </button>
//           </div>
//         </div>
//       ))}
  
//       {selectedCountry && showCiudades && (
//         <Ciudades
//           selectedCountryCities={selectedCountryCities}
//           weatherData={weatherData}
//           loadCityWeatherData={loadCityWeatherData}
//           setSelectedCountry={setSelectedCountry}
//           setShowCiudades={setShowCiudades}
//         />
//       )}
//     </>
//   );
//       }

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { useNavigate } from "react-router-dom";
// import { Ciudades } from "../pages/ciudades.js";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [paisDetails, setPaisDetails] = useState({});
//   const [showCountryInfo, setShowCountryInfo] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   const handleClickCities = async (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     await loadWeatherData(countryName);
//     await loadCountryDetails(countryName);
//     setShowCountryInfo(false);
//   };

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCountryDetails = async (countryName) => {
//     try {
//       const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
//       const details = await response.json();
//       setPaisDetails((prevState) => ({
//         ...prevState,
//         [countryName]: details[0]
//       }));
//     } catch (error) {
//       console.error("Error loading country details:", error);
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const handleClearData = () => {
//     setWeatherData({});
//     setPaisDetails({});
//   };

//   return (
//     <>
//       {paises.map((pais, index) => (
//         <div key={index} className="card twocountry" style={{ width: "100%" }}>
//           <button className="close-button" onClick={handleClearData}>
//             <i className="fas fa-times"></i>
//           </button>
//           <img src={pais.country_img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h2 className="card-title">{pais.country_name}</h2>
//             {showCountryInfo && weatherData[pais.country_name] && (
//               <div className="card-text">
//                 <h5 className="datos">Region: {weatherData[pais.country_name].location.region}</h5>
//                 <h5 className="datos">Country: {weatherData[pais.country_name].location.country}</h5>
//                 <h5 className="datos">Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//                 <h5 className="datos">Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//                 <h5 className="datos">Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//                 {paisDetails[pais.country_name] && (
//                   <>
//                     <h5 className="datos">Currency: {paisDetails[pais.country_name].currencies[0].name}</h5>
//                     <h5 className="datos">
//                       Languages: {paisDetails[pais.country_name].languages.map((lang) => lang.name).join(", ")}
//                     </h5>
//                   </>
//                 )}
//                 <img src={weatherData[pais.country_name].current.condition.icon} alt="Weather Icon" />
//               </div>
//             )}
//           </div>
//           <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
//             More Information
//           </button>
//         </div>
//       ))}

//       {selectedCountry && !showCountryInfo && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Cities</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={() => {
//                     setSelectedCountry(null);
//                     setShowCountryInfo(true);
//                   }}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <Ciudades
//                   selectedCountryCities={selectedCountryCities}
//                   weatherData={weatherData}
//                   loadCityWeatherData={loadCityWeatherData}
//                   setSelectedCountry={setSelectedCountry}
//                   setShowCiudades={setShowCountryInfo}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                   onClick={() => {
//                     setSelectedCountry(null);
//                     setShowCountryInfo(true);
//                   }}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { useNavigate } from "react-router-dom";
// import { Ciudades } from "../pages/ciudades.js";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [paisDetails, setPaisDetails] = useState({});
//   const [showCountryInfo, setShowCountryInfo] = useState(true);
//   const [showCities, setShowCities] = useState(false); // Nuevo estado para mostrar las ciudades en lugar del modal
//   const navigate = useNavigate();

//   useEffect(() => {
//     actions.loadCountries();
//   }, []);

//   const handleClickCities = async (countryName) => {
//     actions.loadCitiesByCountry(countryName);
//     setSelectedCountry(countryName);
//     await loadWeatherData(countryName);
//     await loadCountryDetails(countryName);
//     setShowCountryInfo(false);
//     setShowCities(true); // Mostrar el componente "Ciudades"
//   };

//   useEffect(() => {
//     setSelectedCountryCities(store.cities);
//   }, [store.cities]);

//   const loadWeatherData = async (selectedCountry) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [selectedCountry]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const loadCountryDetails = async (countryName) => {
//     try {
//       const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
//       const details = await response.json();
//       setPaisDetails((prevState) => ({
//         ...prevState,
//         [countryName]: details[0]
//       }));
//     } catch (error) {
//       console.error("Error loading country details:", error);
//     }
//   };

//   const loadCityWeatherData = async (cityName) => {
//     try {
//       const apiKey = "da3199df336942f8828210302232806";
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
//       );
//       const data = await response.json();
//       setWeatherData((prevState) => ({
//         ...prevState,
//         [cityName]: data
//       }));
//     } catch (error) {
//       console.error("Error loading weather data:", error);
//     }
//   };

//   const handleClearData = () => {
//     setWeatherData({});
//     setPaisDetails({});
//   };

//   return (
//     <>
//       {paises.map((pais, index) => (
//         <div key={index} className="card twocountry" style={{ width: "100%" }}>
//           <button className="close-button" onClick={handleClearData}>
//             <i className="fas fa-times"></i>
//           </button>
//           <img src={pais.country_img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h2 className="card-title">{pais.country_name}</h2>
//             {showCountryInfo && weatherData[pais.country_name] && (
//               <div className="card-text">
//                 <h5 className="datos">Region: {weatherData[pais.country_name].location.region}</h5>
//                 <h5 className="datos">Country: {weatherData[pais.country_name].location.country}</h5>
//                 <h5 className="datos">Local Time: {weatherData[pais.country_name].location.localtime}</h5>
//                 <h5 className="datos">Weather: {weatherData[pais.country_name].current.condition.text}</h5>
//                 <h5 className="datos">Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
//                 {paisDetails[pais.country_name] && (
//                   <>
//                     <h5 className="datos">Currency: {paisDetails[pais.country_name].currencies[0].name}</h5>
//                     <h5 className="datos">
//                       Languages: {paisDetails[pais.country_name].languages.map((lang) => lang.name).join(", ")}
//                     </h5>
//                   </>
//                 )}
//                 <img src={weatherData[pais.country_name].current.condition.icon} alt="Weather Icon" />
//               </div>
//             )}
//           </div>
//           <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
//             More Information
//           </button>
//         </div>
//       ))}

//       {selectedCountry && !showCountryInfo && showCities && (
//         <Ciudades
//           selectedCountryCities={selectedCountryCities}
//           weatherData={weatherData}
//           loadCityWeatherData={loadCityWeatherData}
//           setSelectedCountry={setSelectedCountry}
//           setShowCiudades={setShowCities}
//         />
//       )}
//     </>
//   );
// };
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Ciudades } from "../pages/ciudades.js";

export const Twocountry = () => {
  const { store, actions } = useContext(Context);
  const paises = store.countries;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCities, setSelectedCountryCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [paisDetails, setPaisDetails] = useState({});
  const [showCities, setShowCities] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    actions.loadCountries();
  }, []);

  useEffect(() => {
    setSelectedCountryCities(store.cities);
  }, [store.cities]);

  const loadWeatherData = async (selectedCountry) => {
    try {
      const apiKey = "da3199df336942f8828210302232806";
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
      );
      const data = await response.json();
      setWeatherData((prevState) => ({
        ...prevState,
        [selectedCountry]: data
      }));
    } catch (error) {
      console.error("Error loading weather data:", error);
    }
  };

  const loadCountryDetails = async (countryName) => {
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
      const details = await response.json();
      setPaisDetails((prevState) => ({
        ...prevState,
        [countryName]: details[0]
      }));
    } catch (error) {
      console.error("Error loading country details:", error);
    }
  };

  const loadCityWeatherData = async (cityName) => {
    try {
      const apiKey = "da3199df336942f8828210302232806";
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
      );
      const data = await response.json();
      setWeatherData((prevState) => ({
        ...prevState,
        [cityName]: data
      }));
    } catch (error) {
      console.error("Error loading weather data:", error);
    }
  };

  const handleClearData = () => {
    setWeatherData({});
    setPaisDetails({});
  };

  const handleClickCountryInfo = async (countryName) => {
    setSelectedCountry(countryName);
    setShowCities(false); // Ocultar el componente "Ciudades"
    await loadWeatherData(countryName);
    await loadCountryDetails(countryName);
  };

  const handleClickCities = (countryName) => {
    actions.loadCitiesByCountry(countryName);
    setSelectedCountry(countryName);
    setShowCities(true); // Mostrar el componente "Ciudades"
  };

  return (
    <>
      {paises.map((pais, index) => (
        <div key={index} className="card twocountry" style={{ width: "100%" }}>
          <button className="close-button" onClick={handleClearData}>
            <i className="fas fa-times"></i>
          </button>
          <img src={pais.country_img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">{pais.country_name}</h2>
            {(selectedCountry === pais.country_name && weatherData[pais.country_name]) && (
              <div className="card-text">
                <h5 className="datos">Region: {weatherData[pais.country_name].location.region}</h5>
                <h5 className="datos">Country: {weatherData[pais.country_name].location.country}</h5>
                <h5 className="datos">Local Time: {weatherData[pais.country_name].location.localtime}</h5>
                <h5 className="datos">Weather: {weatherData[pais.country_name].current.condition.text}</h5>
                <h5 className="datos">Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h5>
                {paisDetails[pais.country_name] && (
                  <>
                    <h5 className="datos">Currency: {paisDetails[pais.country_name].currencies[0].name}</h5>
                    <h5 className="datos">
                      Languages: {paisDetails[pais.country_name].languages.map((lang) => lang.name).join(", ")}
                    </h5>
                  </>
                )}
                <img src={weatherData[pais.country_name].current.condition.icon} alt="Weather Icon" />
              </div>
            )}
          </div>
          <button className="btn more" onClick={() => handleClickCountryInfo(pais.country_name)}>
            More Information
          </button>
          {/* <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
            Ciudades
          </button> */}
          <Link className="btn more" to={"/country/"+pais.country_name}> Ciudades </Link>
        </div>
      ))}

      {selectedCountry && showCities && (
        <Ciudades
          selectedCountryCities={selectedCountryCities}
          weatherData={weatherData}
          loadCityWeatherData={loadCityWeatherData}
          setSelectedCountry={setSelectedCountry}
          setShowCiudades={setShowCities}
        />
      )}
    </>
  );
};


