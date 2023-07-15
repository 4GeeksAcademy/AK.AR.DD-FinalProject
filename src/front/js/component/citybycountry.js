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





