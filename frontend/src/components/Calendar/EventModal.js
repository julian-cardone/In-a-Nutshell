import React, { useState } from "react";
import { Modal } from "../../context/Modal";

// export { SignupForm, LoginForm };

export function EventModal({ onClose, eventDate }) {
  return (
    <Modal onClose={onClose}>
      <div className="event-modal">
        <h1>Create an Event Modal for {eventDate}</h1>
      </div>
    </Modal>
  );
}
