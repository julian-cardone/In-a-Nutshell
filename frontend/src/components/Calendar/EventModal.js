import React, { useState } from "react";
import { Modal } from "../../context/Modal";

// export { SignupForm, LoginForm };

export function EventModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="event-modal">
        <h1>Modal</h1>
      </div>
    </Modal>
  );
}
