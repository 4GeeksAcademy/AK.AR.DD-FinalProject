import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";

export const City = ({ selectedCountry, handleSaveCity }) => {
  const { actions } = useContext(Context);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fileInputRef = useRef(null);

  const handleSearchCity = async () => {
    const data = await actions.loadCityWeather(city);
    setWeatherData(data);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    actions.processAndSaveImage(file, selectedCountry);
  };

  const handleSelectFiles = () => {
    fileInputRef.current.click();
  };

  const handleCitySave = () => {
    const cityData = {
      name: city,
      weather: weatherData
    };
    handleSaveCity(cityData);
  };

  return (
    <div className="container-fluid">


        <h4 htmlFor="formGroupExampleInput" className="form-label">
          City
        </h4>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Name City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-warning" onClick={handleSearchCity}>Buscar ciudad</button>
          </div>
        </div>
        <br />
        <div className="mx-2">
          <h5>Name: {weatherData && weatherData.location.name}</h5>
          <h5>Region: {weatherData && weatherData.location.region}</h5>
          <h5>Country: {weatherData && weatherData.location.country}</h5>
          <h5>Local Time: {weatherData && weatherData.location.localtime}</h5>
          <h5>Weather: {weatherData && weatherData.current.condition.text}</h5>
          <h5>Degree centigrade: {weatherData && weatherData.current.temp_c}°C</h5>
        </div>

        <div className="mx-2 mb-3">
          <label htmlFor="uploadImage" className="form-label">
            Upload Photo
          </label>

          <input
            type="file"
            className="form-control"
            id="uploadImage"
            onChange={handleFileChange}
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button type="button" className="btn btn-primary mx-2" onClick={handleSelectFiles}>
            Select files
          </button>
        </div>

        <button type="button" className="btn btn-success" onClick={handleCitySave}>
          Save City
        </button>

    </div>
  );
};