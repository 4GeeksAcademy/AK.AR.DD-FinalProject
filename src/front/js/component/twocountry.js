import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Twocountry = () => {
  const { store, actions } = useContext(Context);
  const paises = store.countries;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCities, setSelectedCountryCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    actions.loadCountries();
  }, []);

  const handleClickCities = (countryName) => {
    actions.loadCitiesByCountry(countryName);
    setSelectedCountry(countryName);
    loadWeatherData(countryName);
  };

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

  return (
    <div>
      {paises.map((pais, index) => (
        <div key={index} className="card" style={{ width: "25%" }}>
          <img src={pais.country_img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{pais.country_name}</h5>
            <div className="card-text">
              {weatherData[pais.country_name] && (
                <>
                  <h2>Region: {weatherData[pais.country_name].location.region}</h2>
                  <h2>Country: {weatherData[pais.country_name].location.country}</h2>
                  <h2>Local Time: {weatherData[pais.country_name].location.localtime}</h2>
                  <h2>Weather: {weatherData[pais.country_name].current.condition.text}</h2>
                  <h2>Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h2>
                </>
              )}
            </div>
            <button className="btn btn-primary" onClick={() => handleClickCities(pais.country_name)}>
              More Information
            </button>
          </div>
        </div>
      ))}

      {selectedCountry && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cities</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setSelectedCountry(null)}
                ></button>
              </div>
              <div className="modal-body">
                {selectedCountryCities.length === 0 ? (
                  <p>No cities available for {selectedCountry}</p>
                ) : (
                  selectedCountryCities.map((city, index) => (
                    <div key={index}>
                      <h5>Ciudad: {city}</h5>
                      {weatherData[city] && (
                        <>
                          <p>Region: {weatherData[city].location.region}</p>
                          <p>Country: {weatherData[city].location.country}</p>
                          <p>Local Time: {weatherData[city].location.localtime}</p>
                          <p>Weather: {weatherData[city].current.condition.text}</p>
                          <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
                        </>
                      )}
                      <button onClick={() => loadCityWeatherData(city)}>Load Weather Data</button>
                    </div>
                  ))
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setSelectedCountry(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.paises;
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
//      {paises.map((pais, index) => (
//         <div key={index} className="card mx-2 my-2 text-center rounded-5" style={{ width: "25%" }}>
//           <img src={rigoImageUrl} className="card-img-top rounded-5" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{pais.country_name}</h5>
//             <div className="card-text justify-content">
//               {weatherData[pais.country_name] && (
//                 <>
//                   <h2>Region: {weatherData[pais.country_name].location.region}</h2>
//                   <h2>Country: {weatherData[pais.country_name].location.country}</h2>
//                   <h2>Local Time: {weatherData[pais.country_name].location.localtime}</h2>
//                   <h2>Weather: {weatherData[pais.country_name].current.condition.text}</h2>
//                   <h2>Degree centigrade: {weatherData[pais.country_name].current.temp_c}°C</h2>
//                 </>
//               )}
//             </div>
//             <button className="btn btn-primary" onClick={() => handleClickCities(pais.country_name)}>
//               More information
//             </button>
//           </div>

//           {selectedCountry && (
//           <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">Cities</h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                     onClick={() => setSelectedCountry(null)}
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   {selectedCountryCities.length === 0 ? (
//                     <p>No cities available for {selectedCountry}</p>
//                   ) : (
//                     selectedCountryCities.map((city, index) => (
//                       <div key={index}>
//                         <h5>Ciudad: {city}</h5>
//                         {weatherData[city] && (
//                           <>
//                             <p>Region: {weatherData[city].location.region}</p>
//                             <p>Country: {weatherData[city].location.country}</p>
//                             <p>Local Time: {weatherData[city].location.localtime}</p>
//                             <p>Weather: {weatherData[city].current.condition.text}</p>
//                             <p>Degree centigrade: {weatherData[city].current.temp_c}°C</p>
//                           </>
//                         )}
//                         <button onClick={() => loadCityWeatherData(city)}>Load Weather Data</button>
//                       </div>
//                     ))
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                     onClick={() => setSelectedCountry(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };