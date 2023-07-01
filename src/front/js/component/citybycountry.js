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

import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const CitybyCountry = ({ selectedCountry }) => {
  const { store } = useContext(Context);
  const cities = store.cities;

  return (
    <div className="card" style={{ width: "25%" }}>
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        <h2>Cities</h2>
        {cities === undefined ? (
          <p>Aún no tienes ciudades asignadas</p>
        ) : cities.length === 0 ? (
          <p>No cities available for {selectedCountry}</p>
        ) : (
          cities.map((city, index) => (
            <h5 key={index}>Ciudad: {city}</h5>
          ))
        )}
      </div>
    </div>
  );
};

