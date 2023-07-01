// import React from "react";

// export const City = () => {
//   return (
//     <div>
//      <div class="mb-3">

//         <label for="formGroupExampleInput" class="form-label">City</label>
//         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name City"/>
//         </div>
//         <div class="mb-3">
//         <label for="formGroupExampleInput2" class="form-label">Weather</label>
//         <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Weather"/>
//         <label for="formGroupExampleInput" class="form-label">Cost of living</label>
//         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Cost of living"/>
//         </div>
//     </div>
//   );
// };

// import React from "react";

// export const City = () => {
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     // Aquí puedes realizar acciones con el archivo seleccionado, como mostrar una vista previa o enviarlo al servidor.
//   };

//   return (
//     <div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">City</label>
//         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name City" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">Weather</label>
//         <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Weather" />
//         <label htmlFor="formGroupExampleInput" className="form-label">Cost of living</label>
//         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Cost of living" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="uploadImage" className="form-label">Upload Photo</label>
//         <input type="file" className="form-control" id="uploadImage" onChange={handleFileChange} accept="image/*" />
     
//       </div>
//     </div>
//   );
// };

// import React, { useRef } from "react";

// export const City = () => {
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     // acciones con el archivo seleccionado
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">City</label>
//         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name City" />
//         <button type="button" class="btn btn-warning">Buscar ciudad</button>
//         <h2>Weather: </h2>
//       </div>
     
//       <div className="mb-3">
//         <label htmlFor="uploadImage" className="form-label">Upload Photo</label>
//         <input
//           type="file"
//           className="form-control"
//           id="uploadImage"
//           onChange={handleFileChange}
//           accept="image/*"
//           ref={fileInputRef}
//           style={{ display: "none" }} // Oculta el botón de carga de archivos predeterminado
//         />
//         <button type="button" className="btn btn-primary" onClick={handleSelectFiles}>
//           Select files
//         </button>
//       </div>
//     </div>
//   );
// }; BIIEN BIEN 


// import React, { useState, useContext, useRef } from "react";
// import { Context } from "../store/appContext";

// export const City = () => {
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
//     // acciones con el archivo seleccionado
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">
//           City
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="formGroupExampleInput"
//           placeholder="Name City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
//           Buscar ciudad
//         </button>
//         <h2>City: {weatherData && weatherData.location.name}</h2>
//         <h2>Region: {weatherData && weatherData.location.region}</h2>
//         <h2>Country: {weatherData && weatherData.location.country}</h2>
//         <h2>Local Time: {weatherData && weatherData.location.localtime}</h2>
//         <h2>Weather: {weatherData && weatherData.current.condition.text}</h2>
//         <h2>Degree centigrade: {weatherData && weatherData.current.temp_c}°C</h2>


//         <div className="mb-3">
//        <label htmlFor="uploadImage" className="form-label">Upload Photo</label>
//       <input
//           type="file"
//           className="form-control"
//           id="uploadImage"
//           onChange={handleFileChange}
//           accept="image/*"
//           ref={fileInputRef}
//           style={{ display: "none" }} // Oculta el botón de carga de archivos predeterminado
//         />
//         <button type="button" className="btn btn-primary" onClick={handleSelectFiles}>
//           Select files
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useContext, useRef } from "react";
// import { Context } from "../store/appContext";

// export const City = ({ selectedCountry }) => {
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
//     // Realiza las acciones necesarias con el archivo seleccionado
//     // Puedes llamar a una función en el contexto que procese y guarde la imagen en la base de datos
//     actions.processAndSaveImage(file, selectedCountry); // Ejemplo de llamada a la función en el contexto
//   };

//   const handleSelectFiles = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">
//           City
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="formGroupExampleInput"
//           placeholder="Name City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
//           Buscar ciudad
//         </button>
//         <h2>City: {weatherData && weatherData.location.name}</h2>
//         <h2>Region: {weatherData && weatherData.location.region}</h2>
//         <h2>Country: {weatherData && weatherData.location.country}</h2>
//         <h2>Local Time: {weatherData && weatherData.location.localtime}</h2>
//         <h2>Weather: {weatherData && weatherData.current.condition.text}</h2>
//         <h2>Degree centigrade: {weatherData && weatherData.current.temp_c}°C</h2>

//         <div className="mb-3">
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
//             style={{ display: "none" }} // Oculta el botón de carga de archivos predeterminado
//           />
//           <button type="button" className="btn btn-primary" onClick={handleSelectFiles}>
//             Select files
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

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
    <div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Name City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="button" className="btn btn-warning" onClick={handleSearchCity}>
          Buscar ciudad
        </button>
        <h2>City: {weatherData && weatherData.location.name}</h2>
        <h2>Region: {weatherData && weatherData.location.region}</h2>
        <h2>Country: {weatherData && weatherData.location.country}</h2>
        <h2>Local Time: {weatherData && weatherData.location.localtime}</h2>
        <h2>Weather: {weatherData && weatherData.current.condition.text}</h2>
        <h2>Degree centigrade: {weatherData && weatherData.current.temp_c}°C</h2>

        <div className="mb-3">
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
          <button type="button" className="btn btn-primary" onClick={handleSelectFiles}>
            Select files
          </button>
        </div>

        <button type="button" className="btn btn-success" onClick={handleCitySave}>
          Save City
        </button>
      </div>
    </div>
  );
};


