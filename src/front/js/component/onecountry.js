import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { City } from "../pages/city"; 
import { CitybyCountry } from "../component/citybycountry";

export const OneCountry = ({ selectedCountry }) => {
  const { store, actions } = useContext(Context);
  const [showCity, setShowCity] = useState(false);
  const [cityDataList, setCityDataList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para almacenar el archivo de imagen seleccionado
  const [imageUrl, setImageUrl] = useState(null); 



  useEffect(() => {
    if (selectedCountry) {
      actions.loadWeatherData(selectedCountry);
      actions.loadCitiesByCountry(selectedCountry);
      console.log(store.paises)
      console.log(store.countries)
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
    console.log(selectedCountry);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]); // Actualiza el estado con el archivo de imagen seleccionado
  };

 
  // const handleUploadImage = () => {
  //   if (selectedImage) {
  //     actions.processAndSaveImage(selectedImage, selectedCountry, setImageUrl); // Pasa setImageUrl como argumento
  //   }
  // };
  const handleUploadImage = () => {
    if (selectedImage) {
      actions.processAndSaveImage(selectedImage, selectedCountry, setImageUrl);
    }
  };

  const country = store.paises.find((country) => country.name === selectedCountry);
  const countryDetails = country ? country.details : null;
  // const pais = store.countries.find((country) => country.name === selectedCountry);
  // console.log(pais)

  return (
    <div className="container">
      {countryDetails && (
        <div className="card mb-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
            <img src={imageUrl ? imageUrl : rigoImageUrl} className="img-fluid rounded-start" alt="..." />
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
                <h5>Capital: {countryDetails.capital}</h5>
                <h5>Currency: {countryDetails.currencies[0].name}</h5>
                <h5>Languages: {countryDetails.languages.map((lang) => lang.name).join(", ")}</h5>
                <h5>Population: {countryDetails.population}</h5>
                {store.weatherData && (
                  <>
                    <h5>Weather(now): {store.weatherData.current.condition.text}</h5>
                    <img src={store.weatherData.current.condition.icon} alt="Weather Icon" />
                  </>
                )}
                <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
                  Add a city
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteCountry}>
                  Delete country
                </button>
                <div>
                  <input type="file" onChange={handleImageChange} /> {/* Componente FileInput para seleccionar la imagen */}
                  <button type="button" className="btn btn-primary" onClick={handleUploadImage}>Upload Image</button> {/* Botón "Upload Image" */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCity && <City selectedCountry={selectedCountry} handleSaveCity={handleSaveCity} />}

      {showAlert && (
        <div className="alert alert-danger" role="alert">
          City already exists
        </div>
      )}

      {cityDataList.map((cityData, index) => (
        <div key={index}>
          <h2>City: {cityData.name}</h2>
          <h2>Weather: {cityData.weather.current.condition.text}</h2>
        </div>
      ))}

      {selectedCountry && <CitybyCountry selectedCountry={selectedCountry} />}

      <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
        GRABAR
      </button>
    </div>
  );
};

// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "../pages/city";
// import { CitybyCountry } from "./citybycountry";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);
//   const [showCity, setShowCity] = useState(false);
//   const [cityDataList, setCityDataList] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     if (selectedCountry) {
//       actions.loadWeatherData(selectedCountry);
//       actions.loadCitiesByCountry(selectedCountry);
//     }
//   }, [selectedCountry]);

//   const handleAddCity = () => {
//     setShowCity(true);
//   };

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   const handleSaveCity = (cityData) => {
//     const existingCity = cityDataList.find((data) => data.name === cityData.name);
//     if (existingCity) {
//       setShowAlert(true);
//       return;
//     }

//     setCityDataList([...cityDataList, cityData]);
//   };

//   const handleSaveToDatabase = () => {
//     const data = {
//       country: country,
//       selectedCountry: selectedCountry,
//       cities: cityDataList
//     };
//     console.log("Data to be saved:", data);
//     actions.saveDataToDatabase(data);
//     console.log(selectedCountry)
//   };

//   return (
//     <div className="container-fluid">
//       {countryDetails && (
//         <div className="card mb-3" style={{ width: "100%" }}>
//           <div className="row g-0">
//             <div className="col-md-4">
//               <img src={rigoImageUrl} className="img-fluid rounded-start" alt="..." />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h2 className="card-title">
//                   {selectedCountry}
//                   {countryDetails.subregion && `, ${countryDetails.subregion}`}{" "}
//                   <span role="img" aria-label="Location">
//                     🌏
//                   </span>
//                 </h2>
//                 <h5>Capital: {countryDetails.capital}</h5>
//                 <h5>Currency: {countryDetails.currencies[0].name}</h5>
//                 <h5>Languages: {countryDetails.languages.map((lang) => lang.name).join(", ")}</h5>
//                 <h5>Population: {countryDetails.population}</h5>
//                 {store.weatherData && (
//                   <>
//                     <h5>Weather(now): {store.weatherData.current.condition.text}</h5>
//                     <img src={store.weatherData.current.condition.icon} alt="Weather Icon" />
//                   </>
//                 )}
//                 <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
//                   Add a city
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showCity && <City selectedCountry={selectedCountry} handleSaveCity={handleSaveCity} />}

//       {showAlert && (
//         <div className="alert alert-danger" role="alert">
//           City already exists
//         </div>
//       )}

//       {cityDataList.map((cityData, index) => (
//         <div key={index}>
//           <h2>City: {cityData.name}</h2>
//           <h2>Weather: {cityData.weather.current.condition.text}</h2>
//         </div>
//       ))}

//       {selectedCountry && <CitybyCountry selectedCountry={selectedCountry} />}

//       <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
//         GRABAR
//       </button>
//     </div>
//   );
// };