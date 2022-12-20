import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import "./SessionForms.css";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export { SignupForm, LoginForm };

export function LoginModal({ onClose, onSuccess }) {
  return (
    <Modal onClose={onClose}>
      <div className="session-modal">
        <h1>Log In</h1>
        <LoginForm onSuccess={onSuccess} />
      </div>
    </Modal>
  );
}

export function SessionModal({ onClose, onSuccess }) {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <Modal onClose={onClose}>
      <div className="session-modal">
        <h1>{showSignup ? "Sign Up" : "Log In"}</h1>
        {showSignup ? (
          <SignupForm onSuccess={onSuccess} />
        ) : (
          <LoginForm onSuccess={onSuccess} />
        )}
        <button className="link" onClick={() => setShowSignup((prev) => !prev)}>
          {showSignup ? "Log in" : "Sign up"} instead
        </button>
      </div>
    </Modal>
  );
}
