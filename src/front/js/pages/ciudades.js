
// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";


// export const Ciudades = ({
//   selectedCountryCities,
//   weatherData,
//   loadCityWeatherData,
//   setSelectedCountry,
//   setShowCiudades
// }) => {
//   return (
//     <div className="row">
//       {selectedCountryCities && selectedCountryCities.map((city, index) => (
//         <div key={index} className="col-md-4 mb-4">
//           <div className="card">
//             {weatherData[city] && (
//               <>
//                 <img
//                   src={weatherData[city].current.condition.icon}
//                   className="card-img-top"
//                   alt={weatherData[city].current.condition.text}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{city}</h5>
//                   <p className="card-text">Region: {weatherData[city].location.region}</p>
//                   <p className="card-text">Country: {weatherData[city].location.country}</p>
//                   <p className="card-text">Local Time: {weatherData[city].location.localtime}</p>
//                   <p className="card-text">Weather: {weatherData[city].current.condition.text}</p>
//                   <p className="card-text">Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => loadCityWeatherData(city)}
//                   >
//                     Load Weather Data
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// import React from "react";

// export const Ciudades = ({
//   selectedCountryCities,
//   weatherData,
//   loadCityWeatherData,
//   setSelectedCountry,
//   setShowCiudades
// }) => {
//   const handleCityClick = (cityName) => {
//     loadCityWeatherData(cityName);
//   };

//   return (
//     <>
//       {selectedCountryCities.length === 0 ? (
//         <p>No cities available for this country</p>
//       ) : (
//         selectedCountryCities.map((city, index) => (
//           <div key={index}>
//             <h5>Ciudad: {city}</h5>
//             {weatherData[city] && (
//               <>
//                 <p>Region: {weatherData[city].location.region}</p>
//                 <p>Country: {weatherData[city].location.country}</p>
//                 <p>Local Time: {weatherData[city].location.localtime}</p>
//                 <p>Weather: {weatherData[city].current.condition.text}</p>
//                 <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//               </>
//             )}
//             <button onClick={() => handleCityClick(city)}>Load Weather Data</button>
//           </div>
//         ))
//       )}
//       <button onClick={() => setShowCiudades(false)}>Back to Country</button>
//     </>
//   );
// };

// import React, { useContext } from "react";
// import { Context } from "../store/appContext";

// export const Ciudades = ({
//   selectedCountryCities,
//   weatherData,
//   loadCityWeatherData,
//   setSelectedCountry,
//   setShowCiudades
// }) => {
//   const { store, actions } = useContext(Context);

//   const handleCityClick = (cityName) => {
//     loadCityWeatherData(store.selectedCountryCities[index].name);
//   };

//   return (
//     <>
//       <button onClick={() => setShowCiudades(false)}>Back to Country</button>

//       {selectedCountryCities.length === 0 ? (
//         <p>No cities available for this country</p>
//       ) : (
//         selectedCountryCities.map((city, index) => (
//           <div className="card" key={index}>
//             <div className="card-header">
//               <h5 className="card-title">{store.selectedCountryCities[index].name}</h5>
//             </div>
//             <div className="card-body">
//               <img className="w-100" src={store.selectedCountryCities[index].image_url} />
//               {weatherData[store.selectedCountryCities[index].name] && (
//                 <>
//                   <p>Region: {weatherData[city].location.region}</p>
//                 <p>Country: {weatherData[city].location.country}</p>
//                 <p>Local Time: {weatherData[city].location.localtime}</p>
//                 <p>Weather: {weatherData[city].current.condition.text}</p>
//                  <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                 </>
//               )}
//               <button onClick={() => handleCityClick(store.selectedCountryCities[index].name)}>Load Weather Data</button>
//             </div>
//           </div>
//         ))
//       )}
//     </>
//   );
// };
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Ciudades = ({
  selectedCountryCities,
  weatherData,
  loadCityWeatherData,
  setSelectedCountry,
  setShowCiudades
}) => {
  const { store, actions } = useContext(Context);

  const handleCityClick = (cityName, index) => {
    loadCityWeatherData(cityName);
  };

  return (
    <>
      <button onClick={() => setShowCiudades(false)}>Back to Country</button>

      {selectedCountryCities.length === 0 ? (
        <p>No cities available for this country</p>
      ) : (
        selectedCountryCities.map((city, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <h5 className="card-title">{store.selectedCountryCities[index].name}</h5>
            </div>
            <div className="card-body">
              <img className="w-100" src={store.selectedCountryCities[index].image_url} />
              {weatherData[store.selectedCountryCities[index].name] && (
                <>
                  <p>Region: {weatherData[store.selectedCountryCities[index].name].location.region}</p>
                  <p>Country: {weatherData[store.selectedCountryCities[index].name].location.country}</p>
                  <p>Local Time: {weatherData[store.selectedCountryCities[index].name].location.localtime}</p>
                  <p>Weather: {weatherData[store.selectedCountryCities[index].name].current.condition.text}</p>
                  <p>Degree centigrade: {weatherData[store.selectedCountryCities[index].name].current.temp_c}°C</p>
                </>
              )}
              <button onClick={() => handleCityClick(store.selectedCountryCities[index].name, index)}>Load Weather Data</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};



