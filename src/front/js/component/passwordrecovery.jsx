import React, { useState } from "react";

const PasswordRecovery = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password meets the requirements
    if (
      newPassword.length < 8 ||
      !/[A-Z]/.test(newPassword) ||
      !/[0-9].*[0-9]/.test(newPassword)
    ) {
      setPasswordError(
        "Password must be at least eight characters long, contain one uppercase letter, and have at least two numbers."
      );
      return;
    }

    // Password meets the requirements
    // Reset the error message and proceed with further actions (e.g., password reset)
    setPasswordError("");
    // Further logic for password recovery (e.g., send a password reset request)
  };

  return (
    <div>
      <h2>Password Recovery</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {passwordError && <p>{passwordError}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
