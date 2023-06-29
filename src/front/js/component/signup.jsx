import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Signup = ({ handleClose }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [description, setDescription] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();
    console.log("send data");
    console.log(fullname, email, password, nationality, description);
    actions.signup(fullname, email, password, nationality, description);
    handleClose();
    navigate("/"); // Redirect to home after successful signup
  }

  return (
    <form onSubmit={sendData}>
      <div className="mb-3">
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          className="form-control"
          id="fullnameInput"
          placeholder="Insert your complete name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="Please insert your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Please insert your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          className="form-control"
          id="nationalityInput"
          placeholder="What's your nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="descriptionInput"
          placeholder="Write a brief description about yourself"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </form>
  );
};