
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



