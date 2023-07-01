import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Login } from "../component/login.jsx";
import { Signup } from "../component/signup.jsx";

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
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-text">YOUR NOMAD GUIDE</span>
        </Link>
        <div className="ml-auto">
          {store.auth === true ? (
            <button className="btn btn-logout" onClick={() => handleLogout()}>
              Logout
            </button>
          ) : (
            <>
              <button className="btn btn-login" onClick={handleLoginModalShow}>
                Login
              </button>
              <button className="btn btn-signup" onClick={handleSignupModalShow}>
                Sign Up
              </button>
            </>
          )}
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
