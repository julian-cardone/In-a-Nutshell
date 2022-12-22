import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NewEventForm from "../NewEventForm";
import { format } from "date-fns";

// export { SignupForm, LoginForm };

export function EventModal({ onClose, eventDate, showModal, setShowModal }) {
  return (
    <Modal onClose={onClose}>
      <div className="event-modal">
        <h1>Create an Event for {format(new Date(eventDate), "cccc")}, {format(new Date(eventDate), "MMMM Mo")}</h1>
        <NewEventForm eventDateProp={eventDate}showModal={showModal}setShowModal={setShowModal}/>
      </div>
    </Modal>
  );
}
