import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import image from "../../img/rigo-baby.jpg"

const Pais = (props) => {
    const {store, actions} = useContext(Context)

    return (
        <>
        <h1 className="country-name align-center">Uruguay</h1>
        <br />
        <br />
        <div className=" text-success city-info row justify-content-center">
            <div className="little-data-1 col-2" >
                <h5>Capital city</h5>
                <p>Montevideo</p>
            </div>
            <div className="little-data-2 col-2" >
                <h5>Region</h5>
                <p>South America</p>
            </div>
            <div className="little-data-3 col-2" >
                <h5>Language</h5>
                <p>Reviews</p>
            </div>
        </div>
        <div className=" text-success city-info row justify-content-center">
            <div className="little-data-1 col-2" >
                <h5>Population</h5>
                <p>3.500.000</p>
            </div>
            <div className="little-data-2 col-2" >
                <h5>Currency</h5>
                <p>Uruguayan Peso</p>
            </div>
            <div className="little-data-3 col-2" >
                <h5>Weather</h5>
                <p>Sub-Tropical</p>
            </div>
        </div>
        <br />
        <br />
        <h2 className="main-cities" >Main cities</h2>
        
        </>
        
)}

export default Pais