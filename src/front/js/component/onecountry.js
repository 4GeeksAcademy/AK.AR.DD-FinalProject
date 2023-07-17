


import React, { useState, useEffect, useContext } from "react"; 
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import YMG from "../../img/YMG-logo3.png";
import { City } from "../pages/city";
import { CitybyCountry } from "./citybycountry";

export const OneCountry = ({ selectedCountry }) => {
  const { store, actions } = useContext(Context);
  const [showCity, setShowCity] = useState(false);
  const [cityDataList, setCityDataList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [cityAdded, setCityAdded] = useState(false);
  const [countrySaved, setCountrySaved] = useState(false);
  const [addedCities, setAddedCities] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      actions.loadWeatherData(selectedCountry);
      actions.loadCitiesByCountry(selectedCountry);
      fetchCountryImage(selectedCountry);
    }
  }, [selectedCountry]);

  const handleAddCity = () => {
    setShowCity(true);
  };

  const handleSaveCity = (cityData) => {
    const existingCity = cityDataList.find((data) => data.name === cityData.name);
    if (existingCity) {
      setShowAlert(true);
      return;
    }

    setCityDataList([...cityDataList, cityData]);
    setCityAdded(true);
    setAddedCities([...addedCities, cityData.name]);
  };

  const handleDeleteCountry = () => {
    actions.deleteCountry(selectedCountry);
  };

  const handleSaveToDatabase = () => {
    const data = {
      country: country,
      selectedCountry: selectedCountry,
      cities: cityDataList
    };
    console.log("Data to be saved:", data);
    actions.saveDataToDatabase(data);
    setCountrySaved(true);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUploadImage = () => {
    if (selectedImage) {
      actions.processAndSaveImage(selectedImage, selectedCountry, setImageUrl);
    }
  };

  const fetchCountryImage = (country) => {
    const countryUrl = `${process.env.BACKEND_URL}/api/getImageUrl/${country}`;

    fetch(countryUrl)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.imageUrl;
        setImageUrl(imageUrl);
      })
      .catch(error => {
        console.error('Ha ocurrido un error:', error);
      });
  };

  const country = store.paises.find((country) => country.name === selectedCountry);
  const countryDetails = country ? country.details : null;

  return (
    <div className="container">
      {countryDetails && (
        <div className="card mb-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img  src={imageUrl || YMG} className="img-fluid rounded-start" alt="Country" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">
                  {selectedCountry}
                  {countryDetails.subregion && `, ${countryDetails.subregion}`}{" "}
                  <span role="img" aria-label="Location">
                    🌏
                  </span>
                </h2>
                <h5 className="datospais">Capital: <span className="resultpais">{countryDetails.capital}</span> </h5>
                <h5 className="datospais">Currency: <span className="resultpais">{countryDetails.currencies[0].name}</span> </h5>
                <h5 className="datospais">Languages: <span className="resultpais">{countryDetails.languages.map((lang) => lang.name).join(", ")} </span> </h5>
                <h5 className="datospais">Population: <span className="resultpais">{countryDetails.population}</span> </h5>
                {store.weatherData && (
                  <>
                    <h5 className="datospais">Weather(now): <span className="resultpais">{store.weatherData.current.condition.text}</span> </h5>
                    <img src={store.weatherData.current.condition.icon} alt="Weather Icon" />
                  </>
                )}
                <button type="button" className="btn add" onClick={handleAddCity}>
                  Add a city
                </button>
                <button type="button" className="btn btn-danger delete" onClick={handleDeleteCountry}>
                  Delete country
                </button>
                <div>
                  {/* <input type="file" onChange={handleImageChange} /> */}
                  <input type="file" className="form-control archivos" placeholder="select file" onChange={handleImageChange} ></input>
                  <button type="button" className="btn btn-primary upload" onClick={handleUploadImage}>
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCity && <City selectedCountry={selectedCountry} handleSaveCity={handleSaveCity} />}

      {showAlert && (
        <div className="alert alert-success" role="alert">
          UPDATE CITY
        </div>
      )}

      {cityDataList.map((cityData, index) => (
        <div key={index}>
          <h2>City: {cityData.name}</h2>
        </div>
      ))}

      {selectedCountry && (
        <CitybyCountry selectedCountry={selectedCountry} countrySaved={countrySaved} addedCities={addedCities} />
      )}

      {cityAdded && !showAlert && (
        <div className="alert alert-success" role="alert">
          Ciudad Agregada
        </div>
      )}

      <button type="button" className="btn btn-success save" onClick={handleSaveToDatabase} disabled={!cityAdded}>
        Save changes
      </button>
    </div>
  );
};

