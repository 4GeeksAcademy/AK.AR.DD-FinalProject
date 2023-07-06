
// import React, { useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     actions.loadSomeData();
//     if (selectedCountry) {
//       actions.loadCountryWeather(selectedCountry);
//     }
    
//   }, []);

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   return (
//     <div className="container">
//       <form className="row row-cols-lg-auto g-3 align-items-center">
//         <div className="card mb-3" style={{ width: "100%" }}>
//           <div className="row g-0">
//             <div className="col-md-4">
//               <img src={rigoImageUrl}  className="img-fluid rounded-start" alt="..." />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h2 className="card-title">
//                   {selectedCountry}
//                   {countryDetails && countryDetails.subregion}
//                   <span role="img" aria-label="Location">🌏</span>
//                 </h2>
//                 {countryDetails && (
//                   <>
//                     <h5>Capital: {countryDetails.capital}</h5>
//                     <h5>Currency: {countryDetails.currencies[0].name}</h5>
//                     <h5>Languages: {countryDetails.languages.map(lang => lang.name).join(", ")}</h5>
//                     <h5>Population: {countryDetails.population}</h5>
//                     <h5>Weather: {store.weather.current.contition}</h5>
//                     <h5>Añade un comentario:</h5>
//                     <div class="mb-3">
//                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                   </>
//                 )}
              
//                 <p className="card-text">
//                   <small className="text-body-secondary">Last updated 3 mins ago</small>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <br />
//     </div>
//   );
// };

// import React, { useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     if (selectedCountry) {
//       actions.loadWeatherData(selectedCountry); // Corrige el nombre de la acción
//     }
//   }, [selectedCountry]);

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   return (
//     <div className="container">
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
//                     <h5>Weather: {store.weatherData.current.condition.text}</h5>
//                     <img src={store.weatherData.current.condition.icon} alt="Weather Icon" />
//                   </>
//                 )}
//                 <h5>Añade un comentario:</h5>
//                 <div className="mb-3">
//                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                   <button type="button" className="btn btn-success">Save Comment</button>
//                   <button type="button" className="btn btn-secondary">Add a city</button>
//                 </div>
//                 <p className="card-text">
//                   <small className="text-body-secondary">Last updated 3 mins ago</small>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//     </div>
//   );
// };  BIEN HASTA AQUI 

// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);
//   const [showCity, setShowCity] = useState(false);

//   useEffect(() => {
//     if (selectedCountry) {
//       actions.loadWeatherData(selectedCountry);
//     }
//   }, [selectedCountry]);

//   const handleAddCity = () => {
//     setShowCity(true);
//   };

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   return (
//     <div className="container">
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
                
//                 <div className="mb-3">
                  
//                   <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
//                     Add a city
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {showCity && <City />}

//       <button type="button" class="btn btn-success">GRABAR</button>
//     </div>
//   );
// };


// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);
//   const [showCity, setShowCity] = useState(false);

//   useEffect(() => {
//     if (selectedCountry) {
//       actions.loadWeatherData(selectedCountry);
//     }
//   }, [selectedCountry]);

//   const handleAddCity = () => {
//     setShowCity(true);
//   };

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   // Función para grabar en la base de datos
//   const handleSaveToDatabase = () => {
//     // Aquí debes realizar las operaciones necesarias para guardar los datos en la base de datos
//     // Puedes llamar a una función en el contexto que realice la solicitud al backend (Flask) para guardar los datos
//     actions.saveDataToDatabase(data); // Ejemplo de llamada a la función en el contexto
//   };

//   return (
//     <div className="container">
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
                
//                 <div className="mb-3">
//                   <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
//                     Add a city
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {showCity && <City selectedCountry={selectedCountry} />}
      
//       <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
//         GRABAR
//       </button>
//     </div>
//   );
// };

// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);
//   const [showCity, setShowCity] = useState(false);

//   useEffect(() => {
//     if (selectedCountry) {
//       actions.loadWeatherData(selectedCountry);
//     }
//   }, [selectedCountry]);

//   const handleAddCity = () => {
//     setShowCity(true);
//   };

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   // Función para grabar en la base de datos
//   // const handleSaveToDatabase = () => {
//   //   const data = {
//   //     country: country,
//   //     selectedCountry: selectedCountry
//   //   };
//   //   actions.saveDataToDatabase(data);
//   // };

//   const handleSaveToDatabase = () => {
//     const data = {
//       country: country,
//       selectedCountry: selectedCountry
//     };
//     console.log("Data to be saved:", data); // Agrega el console.log aquí para mostrar los datos antes de guardarlos
//     actions.saveDataToDatabase(data);
//   };

//   return (
//     <div className="container">
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
                
//                 <div className="mb-3">
//                   <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
//                     Add a city
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {showCity && <City selectedCountry={selectedCountry} />}
      
//       <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
//         GRABAR
//       </button>
//     </div>
//   );
// };


// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);
//   const [showCity, setShowCity] = useState(false);
//   const [cityDataList, setCityDataList] = useState([]);

//   useEffect(() => {
//     if (selectedCountry) {
//       actions.loadWeatherData(selectedCountry);
//     }
//   }, [selectedCountry]);

//   const handleAddCity = () => {
//     setShowCity(true);
//   };

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   // const handleSaveCity = (cityData) => {
//   //   setCityDataList([...cityDataList, cityData]);
//   // };

//   const handleSaveCity = (cityData) => {
//     const existingCity = cityDataList.find((data) => data.name === cityData.name); // Verifica si la ciudad ya existe en la lista
//     if (existingCity) {
//       setShowAlert(true); // Muestra la alerta si la ciudad ya existe
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
//   };

//   return (
//     <div className="container">
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

//                 <div className="mb-3">
//                   <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
//                     Add a city
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showCity && <City selectedCountry={selectedCountry} handleSaveCity={handleSaveCity} />}

//       {cityDataList.map((cityData, index) => (
//         <div key={index}>
//           <h2>City: {cityData.name}</h2>
//           <h2>Weather: {cityData.weather.current.condition.text}</h2>
//         </div>
//       ))}

//       <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
//         GRABAR
//       </button>
//     </div>
//   );
// };



// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";
// // import { CitybyCountry } from "../component/citybycountry";

// export const OneCountry = ({ selectedCountry }) => {
//   const { store, actions } = useContext(Context);
//   const [showCity, setShowCity] = useState(false);
//   const [cityDataList, setCityDataList] = useState([]);
//   const [showAlert, setShowAlert] = useState(false); // Estado para controlar si se muestra la alerta

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
//     const existingCity = cityDataList.find((data) => data.name === cityData.name); // Verifica si la ciudad ya existe en la lista
//     if (existingCity) {
//       setShowAlert(true); // Muestra la alerta si la ciudad ya existe
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
//   };

//   return (
//     <div className="container">
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
//                      {/* <CitybyCountry selectedCountry={selectedCountry} />
//                 <div className="mb-3"> */}
             
//                   <button type="button" className="btn btn-secondary" onClick={handleAddCity}>
//                     Add a city
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         // </div>
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

//       <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
//         GRABAR
//       </button>
//     </div>
//   );
// };


// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";
// import { CitybyCountry } from "../component/citybycountry";

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
//     <div className="container">
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
//       <CitybyCountry />
//       <button type="button" className="btn btn-success" onClick={handleSaveToDatabase}>
//         GRABAR
//       </button>
//     </div>
//   );
// };

// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";
// import { CitybyCountry } from "../component/citybycountry";

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
//     <div className="container">
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



// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import { City } from "./city";
// import { CitybyCountry } from "../component/citybycountry";

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

//   const handleSaveCity = (cityData) => {
//     const existingCity = cityDataList.find((data) => data.name === cityData.name);
//     if (existingCity) {
//       setShowAlert(true);
//       return;
//     }

//     setCityDataList([...cityDataList, cityData]);
//   };

//   const handleDeleteCountry = () => {
//     actions.deleteCountry(selectedCountry);
//   };

//   const handleSaveToDatabase = () => {
//     const data = {
//       country: country,
//       selectedCountry: selectedCountry,
//       cities: cityDataList
//     };
//     console.log("Data to be saved:", data);
//     actions.saveDataToDatabase(data);
//     console.log(selectedCountry);
//   };

//   const country = store.paises.find((country) => country.name === selectedCountry);
//   const countryDetails = country ? country.details : null;

//   return (
//     <div className="container">
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
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteCountry}>
//                   Delete country
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

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { City } from "./city";
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


