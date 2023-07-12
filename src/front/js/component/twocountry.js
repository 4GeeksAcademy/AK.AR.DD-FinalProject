import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Login } from "../component/login.jsx";
import { CommentFeed } from "../component/comment.jsx"

export const Twocountry = () => {
  const { store, actions } = useContext(Context);
  const paises = store.countries;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCities, setSelectedCountryCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [paisDetails, setPaisDetails] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const [showCommentFeed, setShowCommentFeed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    actions.loadCountries();
  }, []);

  const handleClickCities = (countryName) => {
    actions.loadCitiesByCountry(countryName);
    setSelectedCountry(countryName);
    loadWeatherData(countryName);
    loadCountryDetails(countryName);
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

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleClearData = () => {
    setWeatherData({});
    setPaisDetails({});
  };

  const handleLogin = () => {
    setShowLogin(false);
    navigate("/");
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log("send Data");
    navigate("/login");
  };

  const handleGoToCommentFeed = () => {
    navigate("/comment");
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
            <div className="card-text">
              {weatherData[pais.country_name] && (
                <>
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
                </>
              )}
            </div>
            <button className="btn more" onClick={() => handleClickCities(pais.country_name)}>
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
                <h1 className="modal-title">Cities</h1>
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
                      <h2>Ciudad: {city}</h2>
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

                      <button type="button" className="btn btn-secondary" onClick={store.auth ? handleGoToCommentFeed : sendData}>
                        Go to review section
                      </button>
                    </div>
                  ))
                )}
              </div>
              </div>
            </div>
          </div>
      )}

      {showLogin && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Login</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseLogin}
                ></button>
              </div>
              <div className="modal-body">
                <Login onLogin={handleLogin} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseLogin}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCommentFeed && <CommentFeed />} {/* Render the CommentFeed component when showCommentFeed is true */}
    </>
  );
};

// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import { useNavigate } from "react-router-dom";
// import { Login } from "../component/login.jsx";
// import { CommentFeed } from "../component/comment.jsx";

// export const Twocountry = () => {
//   const { store, actions } = useContext(Context);
//   const paises = store.countries;
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCountryCities, setSelectedCountryCities] = useState([]);
//   const [weatherData, setWeatherData] = useState({});
//   const [paisDetails, setPaisDetails] = useState({});
//   const [showLogin, setShowLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status
//   const navigate = useNavigate();

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

//   const handleShowLogin = () => {
//     setShowLogin(true);
//   };

//   const handleCloseLogin = () => {
//     setShowLogin(false);
//   };

//   const handleClearData = () => {
//     setWeatherData({});
//     setPaisDetails({});
//   };

//   const handleLogin = () => {
//     setShowLogin(false);
//     setIsLoggedIn(true); // Set the login status to true
//     navigate("/");
//   };

//   const sendData = () => {
//     console.log("send Data");
//     navigate("/login");
//   };

//   const handleGoToCommentFeed = () => {
//     navigate("/comment");
//   };

//   const handleUsersReviews = (e) => {
//     if (isLoggedIn) {
//       handleGoToCommentFeed();
//     } else {
//       e.preventDefault(); // Prevent the default form submission behavior
//       sendData();
//     }
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
//                       <button type="button" className="btn btn-secondary" onClick={handleUsersReviews}>
//                         Users' Reviews
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showLogin && (
//         <div className="modal" tabIndex="-1I apologize for the incomplete response. Here's the remaining code:

// ```jsx
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title">Login</h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={handleCloseLogin}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <Login onLogin={handleLogin} />
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseLogin}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showCommentFeed && <CommentFeed />} {/* Render the CommentFeed component when showCommentFeed is true */}
//     </>
//   );
// };

