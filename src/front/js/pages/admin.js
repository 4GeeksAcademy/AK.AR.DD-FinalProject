
// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
// import { OneCountry } from "../component/onecountry";


// export const Admin = () => {
//   const { store, actions } = useContext(Context);
//   const [selectedCountry, setSelectedCountry] = useState("");

//   useEffect(() => {
//     actions.loadSomeData();
//   }, []);

//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//   };

//   return (
//     <div className="container">
//       <form className="row row-cols-lg-auto g-3 align-items-center mt-5">
//     <div className="container barra">
//       <h1 className="bestplace">Welcome <span className="bestpalcespan">Dashboard</span></h1>
//       <form className="row row-cols-lg-auto g-3 align-items-center">
//         <div className="col-12">
//           <label className="visually-hidden" htmlFor="inlineFormSelectPref">
//             Preference
//           </label>
//           <select
//             className="form-select"
//             id="inlineFormSelectPref"
//             onChange={handleCountryChange}
//           >
//             <option value="">Choose the country...</option>
//             {store.paises &&
//               store.paises.map((pais, index) => (
//                 <option key={index} value={pais.name}>
//                   {pais.name}
//                 </option>
//               ))}
//           </select>
//         </div>

//         {/* <div className="col-12">
//           <button type="submit" className="btn btn-primary">
//            SERCH COUNTRY
//           </button>
//         </div> */}
//       </form>

//       <OneCountry selectedCountry={selectedCountry} />
   

//       <br />
      
//       <Link to="/">
//         <button className="btn btn-primary">Back home</button>
//       </Link>
//     </div>
//   );
// };


import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { OneCountry } from "../component/onecountry";

export const Admin = () => {
  const { store, actions } = useContext(Context);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    actions.loadSomeData();
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="container">
      <div className="barra">
        <h1 className="bestplace">
          Welcome <span className="bestpalcespan">Dashboard</span>
        </h1>
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">
              Preference
            </label>
            <select
              className="form-select"
              id="inlineFormSelectPref"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="">Choose the country...</option>
              {store.paises &&
                store.paises.map((pais, index) => (
                  <option key={index} value={pais.name}>
                    {pais.name}
                  </option>
                ))}
            </select>
          </div>
        </form>

        <OneCountry selectedCountry={selectedCountry} />

        <br />

        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    </div>
  );
};
