import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import image from "../../img/rigo-baby.jpg"

const Ciudad = (props) => {
    const {store, actions} = useContext(Context)

    return (
        <>
        <h1 className="city-name align-center">Montevideo</h1>
        <h3 className="country-name align-center">Uruguay</h3>
        <br />
        <br />
        <div className="justify-content-center" >
            <img src={image} className="city-image" />
            <img src="https://nomadlist.com/assets/img/static-maps/montevideo-uruguay.png?1655605878" className="map-image w-25 h-25 mx-5" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className=" text-success city-info row justify-content-center">
            <div className="little-data-1 col-2" >
                <h5>Population</h5>
                <p>1.500.000</p>
            </div>
            <div className="little-data-2 col-2" >
                <h5>Monthly budget</h5>
                <p>US$ 3090</p>
            </div>
            <div className="little-data-3 col-2" >
                <h5>Rating</h5>
                <p>Reviews</p>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        
        
        </>
    )
};

export default Ciudad