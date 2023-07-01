import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Ciudad from "../component/ciudad";
import Pais from "../component/pais";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<button className="btn btn-danger btn-lg" onClick="../">Cities</button>
			<br />
			<br />
			<button className="btn btn-primary btn-lg" onClick="">Countries</button>

			<Ciudad className="ciudad" />

			<Pais className="pais" />

		</div>
	);
};
