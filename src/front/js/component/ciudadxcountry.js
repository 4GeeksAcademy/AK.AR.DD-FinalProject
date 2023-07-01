import React, { Component } from "react";
import { Link } from "react-router-dom";

import rigoImageUrl from "../../img/rigo-baby.jpg";

export const CiudadxCountry = () => (
	<div className="card" style={{ width: "25%" }}>
  <img src={rigoImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ciudades</h5>
    
    <h5 className="card-title">Ciudades1:</h5> 
    <h5 className="card-title">Ciudades2:</h5> 
    <h5 className="card-title">Ciudades3:</h5> 
    <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
  </div>
</div>
);