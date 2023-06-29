import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
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
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">YOUR NOMAD GUIDE</span>
        </Link>
        <div className="ml-auto">
          {store.auth === true ? (
            <button className="btn btn-primary" onClick={() => handleLogout()}>
              Logout
            </button>
          ) : (
            <>
              <Button variant="primary" onClick={handleLoginModalShow}>
                Login
              </Button>
              <Button variant="success" onClick={handleSignupModalShow}>
                Signup
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login handleClose={handleLoginModalClose} />
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={handleSignupModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup handleClose={handleSignupModalClose} />
        </Modal.Body>
      </Modal>
    </nav>
  );
};


