// import React, { useState, useContext, useRef } from "react";
// import { Context } from "../store/appContext";

// export const City = ({ selectedCountry, handleSaveCity }) => {
//   const { actions } = useContext(Context);
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);

//   const fileInputRef = useRef(null);

//   const handleSearchCity = async () => {
//     const data = await actions.loadCityWeather(city);
//     setWeatherData(data);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     actions.processAndSaveImage(file, selectedCountry);
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   const handleCitySave = () => {
//     const cityData = {
//       name: city,
//       weather: weatherData
//     };
//     handleSaveCity(cityData);
//   };

//   return (
//     <div className="container-fluid">


//         <h4 htmlFor="formGroupExampleInput" className="form-label">
//           City
//         </h4>
//         <div className="row">
//           <div className="col-4">
//             <input
//               type="text"
//               className="form-control"
//               id="formGroupExampleInput"
//               placeholder="Name City"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//           </div>
//           <div className="col-2">
//             <button type="button" className="btn btn-warning" onClick={handleSearchCity}>Buscar ciudad</button>
//           </div>
//         </div>
//         <br />
//         <div className="mx-2">
//           <h5>Name: {weatherData && weatherData.location.name}</h5>
//           <h5>Region: {weatherData && weatherData.location.region}</h5>
//           <h5>Country: {weatherData && weatherData.location.country}</h5>
//           <h5>Local Time: {weatherData && weatherData.location.localtime}</h5>
//           <h5>Weather: {weatherData && weatherData.current.condition.text}</h5>
//           <h5>Degree centigrade: {weatherData && weatherData.current.temp_c}°C</h5>
//         </div>

//         <div className="mx-2 mb-3">
//           <label htmlFor="uploadImage" className="form-label">
//             Upload Photo
//           </label>

//           <input
//             type="file"
//             className="form-control"
//             id="uploadImage"
//             onChange={handleFileChange}
//             accept="image/*"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//           />
//           <button type="button" className="btn btn-primary mx-2" onClick={handleSelectFiles}>
//             Select files
//           </button>
//         </div>

//         <button type="button" className="btn btn-success" onClick={handleCitySave}>
//           Save City
//         </button>

//     </div>
//   );
// };

// import React, { useState, useContext, useRef } from "react";
// import { Context } from "../store/appContext";

// export const City = ({ selectedCountry, handleSaveCity }) => {
//   const { actions } = useContext(Context);
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [cityNotFound, setCityNotFound] = useState(false); // Variable de estado para controlar si la ciudad no se encuentra

//   const fileInputRef = useRef(null);

//   const handleSearchCity = async () => {
//     const data = await actions.loadCityWeather(city);
//     if (data.error) {
//       // Si la respuesta contiene un error, establece cityNotFound en true
//       setCityNotFound(true);
//       setWeatherData(null);
//     } else {
//       setCityNotFound(false);
//       setWeatherData(data);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     actions.processAndSaveImage(file, selectedCountry);
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   const handleCitySave = () => {
//     const cityData = {
//       name: city,
//       weather: weatherData
//     };
//     handleSaveCity(cityData);
//   };

//   return (
//     <div className="container-fluid">
//       {cityNotFound && <div className="alert alert-danger">Ciudad no encontrada</div>}

//       <h4 htmlFor="formGroupExampleInput" className="form-label">
//         City
//       </h4>
//       <div className="row">
//         <div className="col-4">
//           <input
//             type="text"
//             className="form-control"
//             id="formGroupExampleInput"
//             placeholder="Name City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="col-2">
//           <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
//             Buscar ciudad
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className="mx-2">
//         {weatherData && (
//           <>
//             <h5>Name: {weatherData.location.name}</h5>
//             <h5>Region: {weatherData.location.region}</h5>
//             <h5>Country: {weatherData.location.country}</h5>
//             <h5>Local Time: {weatherData.location.localtime}</h5>
//             <h5>Weather: {weatherData.current.condition.text}</h5>
//             <h5>Degree centigrade: {weatherData.current.temp_c}°C</h5>
//           </>
//         )}
//       </div>

//       <div className="mx-2 mb-3">
//         <label htmlFor="uploadImage" className="form-label">
//           Upload Photo
//         </label>

//         <input
//           type="file"
//           className="form-control"
//           id="uploadImage"
//           onChange={handleFileChange}
//           accept="image/*"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//         />
//         <button type="button" className="btn btn-primary mx-2" onClick={handleSelectFiles}>
//           Select files
//         </button>
//       </div>

//       <button type="button" className="btn btn-success" onClick={handleCitySave}>
//         Save City
//       </button>
//     </div>
//   );
// };
// import React, { useState, useContext, useRef } from "react";
// import { Context } from "../store/appContext";

// export const City = ({ selectedCountry, handleSaveCity }) => {
//   const { actions } = useContext(Context);
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [cityNotFound, setCityNotFound] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleSearchCity = async () => {
//     const data = await actions.loadCityWeather(city);
//     if (data.error) {
//       setCityNotFound(true);
//       setWeatherData(null);
//     } else {
//       setCityNotFound(false);
//       setWeatherData(data);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     actions.processAndSaveCityImage(file, city);
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   const handleCitySave = () => {
//     const cityData = {
//       name: city,
//       weather: weatherData
//     };
//     handleSaveCity(cityData);
//   };

//   return (
//     <div className="container-fluid">
//       {cityNotFound && <div className="alert alert-danger">Ciudad no encontrada</div>}

//       <h4 htmlFor="formGroupExampleInput" className="form-label">
//         City
//       </h4>
//       <div className="row">
//         <div className="col-4">
//           <input
//             type="text"
//             className="form-control"
//             id="formGroupExampleInput"
//             placeholder="Name City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="col-2">
//           <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
//             Buscar ciudad
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className="mx-2">
//         {weatherData && (
//           <>
//             <h5>Name: {weatherData.location.name}</h5>
//             <h5>Region: {weatherData.location.region}</h5>
//             <h5>Country: {weatherData.location.country}</h5>
//             <h5>Local Time: {weatherData.location.localtime}</h5>
//             <h5>Weather: {weatherData.current.condition.text}</h5>
//             <h5>Degree centigrade: {weatherData.current.temp_c}°C</h5>
           
//           </>
//         )}
//       </div>

//       <div className="mx-2 mb-3">
//         <label htmlFor="uploadImage" className="form-label">
//           Upload Photo
//         </label>

//         <input
//           type="file"
//           className="form-control"
//           id="uploadImage"
//           onChange={handleFileChange}
//           accept="image/*"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//         />
//         <button type="button" className="btn btn-primary mx-2" onClick={handleSelectFiles}>
//           Select files
//         </button>
//       </div>

//       <button type="button" className="btn btn-success" onClick={handleCitySave}>
//         Save City
//       </button>
//     </div>
//   );
// };

// import React, { useState, useContext, useRef } from "react";
// import { Context } from "../store/appContext";

// export const City = ({ selectedCountry, handleSaveCity }) => {
//   const { actions } = useContext(Context);
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [cityNotFound, setCityNotFound] = useState(false);
//   const [isCitySaved, setIsCitySaved] = useState(false); // Nuevo estado
//   const fileInputRef = useRef(null);

//   const handleSearchCity = async () => {
//     const data = await actions.loadCityWeather(city);
//     if (data.error) {
//       setCityNotFound(true);
//       setWeatherData(null);
//     } else {
//       setCityNotFound(false);
//       setWeatherData(data);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     actions.processAndSaveCityImage(file, city);
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   const handleCitySave = () => {
//     const cityData = {
//       name: city,
//       weather: weatherData
//     };
//     handleSaveCity(cityData);
//     setIsCitySaved(true); // Actualiza el estado a true
//   };

//   return (
//     <div className="container-fluid">
//       {cityNotFound && <div className="alert alert-danger">Ciudad no encontrada</div>}

//       <h4 htmlFor="formGroupExampleInput" className="form-label">
//         City
//       </h4>
//       <div className="row">
//         <div className="col-4">
//           <input
//             type="text"
//             className="form-control"
//             id="formGroupExampleInput"
//             placeholder="Name City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="col-2">
//           <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
//             Buscar ciudad
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className="mx-2">
//         {weatherData && (
//           <>
//             <h5>Name: {weatherData.location.name}</h5>
//             <h5>Region: {weatherData.location.region}</h5>
//             <h5>Country: {weatherData.location.country}</h5>
//             <h5>Local Time: {weatherData.location.localtime}</h5>
//             <h5>Weather: {weatherData.current.condition.text}</h5>
//             <h5>Degree centigrade: {weatherData.current.temp_c}°C</h5>
//           </>
//         )}
//       </div>

//       <div className="mx-2 mb-3">
//         <label htmlFor="uploadImage" className="form-label">
//           Upload Photo
//         </label>

//         <input
//           type="file"
//           className="form-control"
//           id="uploadImage"
//           onChange={handleFileChange}
//           accept="image/*"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//         />
//         <button
//           type="button"
//           className="btn btn-primary mx-2"
//           onClick={handleSelectFiles}
//           disabled={!isCitySaved} // Deshabilita el botón si isCitySaved es false
//         >
//           Select files
//         </button>
//       </div>

//       <button type="button" className="btn btn-success" onClick={handleCitySave}>
//         Save City
//       </button>
//     </div>
//   );
// };
import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";

export const City = ({ selectedCountry, handleSaveCity }) => {
  const { actions } = useContext(Context);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSearchCity = async () => {
    const data = await actions.loadCityWeather(city);
    if (data.error) {
      setCityNotFound(true);
      setWeatherData(null);
    } else {
      setCityNotFound(false);
      setWeatherData(data);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadImage = () => {
    if (selectedImage) {
      actions.processAndSaveCityImage(selectedImage, city);
    }
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
      {cityNotFound && <div className="alert alert-danger">Ciudad no encontrada</div>}

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
          <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
            Buscar ciudad
          </button>
        </div>
      </div>
      <br />
      <div className="mx-2">
        {weatherData && (
          <>
            <h5>Name: {weatherData.location.name}</h5>
            <h5>Region: {weatherData.location.region}</h5>
            <h5>Country: {weatherData.location.country}</h5>
            <h5>Local Time: {weatherData.location.localtime}</h5>
            <h5>Weather: {weatherData.current.condition.text}</h5>
            <h5>Degree centigrade: {weatherData.current.temp_c}°C</h5>
          </>
        )}
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
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => fileInputRef.current.click()}
        >
          Select files
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUploadImage}
          disabled={!selectedImage}
        >
          Upload Image
        </button>
      </div>

      <button
        type="button"
        className="btn btn-success"
        onClick={handleCitySave}
        disabled={!city || !weatherData}
      >
        Save City
      </button>
    </div>
  );
};
