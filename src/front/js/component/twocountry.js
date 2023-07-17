import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../component/login.jsx";
import { Ciudades } from "../pages/ciudades.js";
import { Comentario } from "../component/comentario.jsx";

export const Twocountry = () => {
  const { store, actions } = useContext(Context);
  const paises = store.countries;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCities, setSelectedCountryCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [paisDetails, setPaisDetails] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const [showCommentFeed, setShowCommentFeed] = useState(false);
  const [showCities, setShowCities] = useState(false);


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
          <Link className="btn more" to={"/country/"+pais.country_name}> Cities </Link>
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
      {showCommentFeed && <Comentario />} {/* Render the CommentFeed component when showCommentFeed is true */}
    </>
  );
};

