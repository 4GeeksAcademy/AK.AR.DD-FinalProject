import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Login } from "../component/login.jsx";
import { Signup } from "../component/signup.jsx";
import "../../styles/navbar.css";
import YMG from "../../img/YMG-logo.jpg";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  function handleLogout() {
    actions.logout();
    navigate("/");
  }

  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleLoginModalShow = () => setShowLoginModal(true);

  const handleSignupModalClose = () => setShowSignupModal(false);
  const handleSignupModalShow = () => setShowSignupModal(true);

  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={YMG} />
        </Link>
        <div className="ml-auto">
          {store.auth === true ? (
            <button className="btn btn-logout title" onClick={() => handleLogout()}>
              Logout
            </button>
          ) : (
            <>
              <button className="btn btn-login title" onClick={handleLoginModalShow}>
                Login
              </button>
              <button className="btn btn-signup title" onClick={handleSignupModalShow}>
                Sign Up
              </button>
            </>
          )}
          <Link to="/admin">
				    <button className="btn btn-warning">Admin</button>
			    </Link>
        </div>
      </div>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login handleClose={handleLoginModalClose} />
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={handleSignupModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup handleClose={handleSignupModalClose} />
        </Modal.Body>
      </Modal>

    </nav>
  );
};
