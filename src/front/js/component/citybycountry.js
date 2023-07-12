// import React, { useContext } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry }) => {
//   const { store } = useContext(Context);
//   const cities = store.cities;

//   return (
//     <div className="card" style={{ width: "25%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2>Cities</h2>
//         {cities === undefined ? (
//           <p>AGREGA UNA CIUDAD AL MENOS</p>
//         ) : cities.length === 0 ? (
//           <p>No cities available for {selectedCountry}</p>
//         ) : (
//           cities.map((city, index) => (
//             <h5 key={index}>Ciudad: {city}</h5>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
// import React, { useContext } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry }) => {
//   const { store } = useContext(Context);
//   const cities = store.cities;

//   return (
//     <div className="card" style={{ width: "25%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2>Cities</h2>
//         {cities.map((city, index) => (
//           <h5 key={index}>Ciudad: {city}</h5>
//         ))}
//       </div>
//     </div>
//   );
// };

// import React, { useContext } from 'react';
// import { Context } from '../store/appContext';
// export const CitybyCountry = ({ selectedCountry }) => {
//   const { store } = useContext(Context);
//   const cities = store.cities;

//   return (
//     <div className="card" style={{ width: "25%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2>Cities</h2>
//         {cities.length === 0 ? (
//           <p>No cities available for {selectedCountry}</p>
//         ) : (
//           cities.map((city, index) => (
//             <h5 key={index}>Ciudad: {city}</h5>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useContext } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry, countrySaved }) => {
//   const { store } = useContext(Context);
//   const cities = store.cities;

//   return (
//     <div className="card" style={{ width: "25%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2>Cities</h2>
//         {countrySaved ? (
//           cities === undefined ? (
//             <p>AGREGA UNA CIUDAD AL MENOS</p>
//           ) : cities.length === 0 ? (
//             <p>No cities available for {selectedCountry}</p>
//           ) : (
//             cities.map((city, index) => (
//               <h5 key={index}>Ciudad: {city}</h5>
//             ))
//           )
//         ) : (
//           <p>Save the country to see the cities</p>
//         )}
//       </div>
//     </div>
//   );
// };


// import React, { useContext } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry, countrySaved, addedCities }) => {
//   const { store } = useContext(Context);
//   const cities = store.cities;

//   return (
//     <div className="card" style={{ width: "25%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2>Cities</h2>
//         {cities === undefined ? (
//           <p>AGREGA UNA CIUDAD AL MENOS</p>
//         ) : cities.length === 0 && addedCities.length === 0 ? (
//           <p>No cities available for {selectedCountry}</p>
//         ) : (
//           <>
//             {cities.map((city, index) => (
//               <h5 key={index}>Ciudad: {city}</h5>
//             ))}
//             {addedCities.map((city, index) => (
//               <h5 key={index}>Ciudad Agregada: {city}</h5>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };


// import React, { useContext, useState, useEffect } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry, countrySaved, addedCities }) => {
//   const { store } = useContext(Context);
//   const cities = store.cities;
//   const [cityImageUrls, setCityImageUrls] = useState([]);

//   useEffect(() => {
//     if (cities && cities.length > 0) {
//       const fetchCityImageUrls = async () => {
//         try {
//           const promises = cities.map(async (city) => {
//             const response = await fetch(`${process.env.BACKEND_URL}/api/getCityImageUrl/${city}`);
//             if (response.ok) {
//               const data = await response.json();
//               return data.imageUrl;
//             } else {
//               console.error(`Error al obtener la URL de la imagen de la ciudad ${city}`);
//               return null;
//             }
//           });

//           const imageUrls = await Promise.all(promises);
//           setCityImageUrls(imageUrls);
//         } catch (error) {
//           console.error('Error al obtener las URLs de las imágenes de las ciudades:', error);
//         }
//       };

//       fetchCityImageUrls();
//     }
//   }, [cities]);

//   return (
//     <div className="card" style={{ width: "100%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2 className="bestplace">Cities of the <span className="bestpalcespan">Country</span></h2>
//         {!cities || cities.length === 0 ? (
//           <p className="bestplace">You must add a city</p>
//         ) : (
//           <>
//             {cities.map((city, index) => (
//               <div key={index}>
//                 <h5 className="datospais">Ciudad: <span className="resultpais">{city}</span></h5>
//                 {cityImageUrls[index] && (
//                   <div className="text-center mt-3">
//                     <img src={cityImageUrls[index]} alt={city} className="img-city" />
//                   </div>
//                 )}
//               </div>
//             ))}
//             {addedCities.map((city, index) => (
//               <h5 key={index}>Ciudad Agregada: {city}</h5>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useContext, useState, useEffect } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry, countrySaved, addedCities }) => {
//   const { store, actions } = useContext(Context);
//   const cities = store.cities;
//   const [cityImageUrls, setCityImageUrls] = useState([]);

//   useEffect(() => {
//     if (cities && cities.length > 0) {
//       const fetchCityImageUrls = async () => {
//         try {
//           const promises = cities.map(async (city) => {
//             try {
//               const imageUrl = await actions.getCityImageUrl(city);
//               return imageUrl;
//             } catch (error) {
//               console.error(`Error al obtener la URL de la imagen de la ciudad ${city}`);
//               return null;
//             }
//           });

//           const imageUrls = await Promise.all(promises);
//           setCityImageUrls(imageUrls);
//         } catch (error) {
//           console.error('Error al obtener las URLs de las imágenes de las ciudades:', error);
//         }
//       };

//       fetchCityImageUrls();
//     }
//   }, [cities, actions]);

//   return (
//     <div className="card" style={{ width: "100%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2 className="bestplace">Cities of the <span className="bestpalcespan">Country</span></h2>
//         {!cities || cities.length === 0 ? (
//           <p className="bestplace">You must add a city</p>
//         ) : (
//           <>
//             {cities.map((city, index) => (
//               <div key={index}>
//                 <h5 className="datospais">Ciudad: <span className="resultpais">{city}</span></h5>
//                 {cityImageUrls[index] && (
//                   <div className="text-center mt-3">
//                     <img src={cityImageUrls[index]} alt={city} className="img-city" />
//                   </div>
//                 )}
//               </div>
//             ))}
//             {addedCities.map((city, index) => (
//               <h5 key={index}>Ciudad Agregada: {city}</h5>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };


// import React, { useContext, useState, useEffect } from 'react';
// import { Context } from '../store/appContext';

// export const CitybyCountry = ({ selectedCountry, countrySaved, addedCities }) => {
//   const { store, actions } = useContext(Context);
//   const selectedCountryCities = store.selectedCountryCities;
//   const [cityImageUrls, setCityImageUrls] = useState([]);

//   useEffect(() => {
//     if (selectedCountryCities && selectedCountryCities.length > 0) {
//       const fetchCityImageUrls = async () => {
//         try {
//           const promises = selectedCountryCities.map(async (city) => {
//             try {
//               const imageUrl = await actions.getCityImageUrl(city.name);
//               return imageUrl;
//             } catch (error) {
//               console.error(`Error al obtener la URL de la imagen de la ciudad ${city.name}`);
//               return null;
//             }
//           });

//           const imageUrls = await Promise.all(promises);
//           setCityImageUrls(imageUrls);
//         } catch (error) {
//           console.error('Error al obtener las URLs de las imágenes de las ciudades:', error);
//         }
//       };

//       fetchCityImageUrls();
//     }
//   }, [selectedCountryCities, actions]);

//   return (
//     <div className="card" style={{ width: "100%" }}>
//       <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//         <h2 className="bestplace">Cities of the <span className="bestpalcespan">Country</span></h2>
//         {!selectedCountryCities || selectedCountryCities.length === 0 ? (
//           <p className="bestplace">You must add a city</p>
//         ) : (
//           <>
//             {selectedCountryCities.map((city, index) => (
//               <div key={index}>
//                 <h5 className="datospais">Ciudad: <span className="resultpais">{city.name}</span></h5>
//                 {cityImageUrls[index] && (
//                   <div className="text-center mt-3">
//                     <img src={cityImageUrls[index]} alt={city.name} className="img-city" />
//                   </div>
//                 )}
//               </div>
//             ))}
//             {addedCities.map((city, index) => (
//               <h5 key={index}>Ciudad Agregada: {city}</h5>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';

export const CitybyCountry = ({ selectedCountry, countrySaved, addedCities }) => {
  const { store, actions } = useContext(Context);
  const selectedCountryCities = store.selectedCountryCities;

  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        <h2 className="bestplace">Cities of the <span className="bestpalcespan">Country</span></h2>
        {!selectedCountryCities || selectedCountryCities.length === 0 ? (
          <p className="bestplace">You must add a city</p>
        ) : (
          <>
            {selectedCountryCities.map((city, index) => (
              <div key={index}>
                <h5 className="datospais">Ciudad: <span className="resultpais">{city.name}</span></h5>
                {city.image_url && (
                  <div className="text-center mt-3">
                    <img src={city.image_url} alt={city.name} className="img-city" />
                  </div>
                )}
              </div>
            ))}
            {addedCities.map((city, index) => (
              <h5 key={index}>Ciudad Agregada: {city}</h5>
            ))}
          </>
        )}
      </div>
    </div>
  );
};





