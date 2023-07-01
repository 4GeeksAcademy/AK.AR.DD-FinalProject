import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const ForgotPassword = ({ handleClose }) => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Handle submit logic here, e.g., send a password reset email
    console.log("Email:", email);
    // Close the modal after submitting
    handleClose();
  }

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p>
            A link will be sent to your email in order to recover your
            password, but we need to verify it's you before you change it.
          </p>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};
