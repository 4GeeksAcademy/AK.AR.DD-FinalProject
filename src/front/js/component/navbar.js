import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handleLogout() {
    actions.logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-text">YOUR NOMAD GUIDE</span>
        </Link>
        <div className="ml-auto">
          {store.auth ? (
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
              <Link to="/signup" className="btn btn-signup">
                Sign Up
              </Link>
              <Link to="/admin">
				<button className="btn btn-warning">Admin</button>
			</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};


