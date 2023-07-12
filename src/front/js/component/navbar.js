import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../component/login.jsx";
import { Signup } from "../component/signup.jsx";
import "../../styles/navbar.css";
import YMG from "../../img/YMG-logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handleLogout() {
    actions.logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={YMG} className="logo" />
        </Link>
        <div className="ml-auto">
          {store.auth === true ? (
            <button className="btn btn-logout title" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-login title">
                Login
              </Link>
              <Link to="/signup" className="btn btn-signup title">
                Sign Up
              </Link>
              <Link to="/admin">
                <button className="btn btn-warning title">Admin</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
  


