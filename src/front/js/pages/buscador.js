
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Buscador = ({ selectedCountry, handleSaveCity }) => {
  const { actions } = useContext(Context);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearchCity = async () => {
    const data = await actions.loadCityWeather(city);
    setWeatherData(data);
    setSearched(true);
  };

  const handleCitySave = () => {
    const cityData = {
      name: city,
      weather: weatherData,
    };
    handleSaveCity(cityData);
  };

  const handleClearSearch = () => {
    setCity("");
    setWeatherData(null);
    setSearched(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="barrabuscador">
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder=" Name City "
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-warning botonbuscador" onClick={handleSearchCity}>
            Search City
          </button>
        </div>
        {searched && (
          <div className="col-1">
            <button type="button" className="btn btn-dark" onClick={handleClearSearch}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </div>
      <br />

      {searched && weatherData && (
        <div className="mx-2">
          <h5 className="contenidobuscador">Name: {weatherData.location.name}</h5>
          <h5 className="contenidobuscador">Region: {weatherData.location.region}</h5>
          <h5 className="contenidobuscador">Country: {weatherData.location.country}</h5>
          <h5 className="contenidobuscador">Local Time: {weatherData.location.localtime}</h5>
          <h5 className="contenidobuscador">Weather: {weatherData.current.condition.text}</h5>
          <h5 className="contenidobuscador">Degree centigrade: {weatherData.current.temp_c}°C</h5>
        </div>
      )}
    </div>
  );
};

