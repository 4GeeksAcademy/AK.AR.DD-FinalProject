import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { ForgotPassword } from "./forgot-password.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions, store } = useContext(Context);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function sendData(e) {
    e.preventDefault();
    if (email.startsWith("admin")) {
      setError("Correo no permitido");
      return;
    }
    console.log("send Data");
    console.log(email, password);
    actions.login(email, password);
    navigate("/");
  }

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  return (
    <>
      {store.auth ? (
        navigate("/")
      ) : (
        <form className="containerx mt-3" onSubmit={sendData}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary mt-3">
              Log In
            </button>
          </div>
          <div className="col-6 mt-3">
            <Link to="#" onClick={handleForgotPasswordClick}>
              Forgot your password?
            </Link>
          </div>
          <div className="col-6 mt-3">
            <Link to="/loginadmin" onClick={handleForgotPasswordClick}>
              ADMIN
            </Link>
          </div>
        </form>
      )}
      {showForgotPassword && (
        <ForgotPassword handleClose={() => setShowForgotPassword(false)} />
      )}
    </>
  );
};

