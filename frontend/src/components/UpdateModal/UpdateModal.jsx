import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { format } from "date-fns";
import "./UpdateModal.css";
import UpdateForm from "./UpdateForm";

// export { SignupForm, LoginForm };

function UpdateModal({ onClose, event, showModal, setShowModal, setEventsInd }) {
  return (
    <Modal onClose={onClose}>
      <div className="event-modal">
        <h1>Update</h1>
        <h1>{event.title}</h1>
        <UpdateForm
          event={event}
          showModal={showModal}
          setShowModal={setShowModal}
          setEventsInd={setEventsInd}
        />
      </div>
    </Modal>
  );
}

export default UpdateModal;
