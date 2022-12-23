import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { format } from "date-fns";
import NewEventForm from "../NewEventForm";

// export { SignupForm, LoginForm };

export function EventModal({ onClose, eventDate, showModal, setShowModal, setEventsInd }) {
  return (
    <Modal onClose={onClose}>
      <div className="event-modal">
        <h1>
          {format(new Date(eventDate), "eeee")},{" "}
          {format(new Date(eventDate), "MMMM do")}
        </h1>
        <NewEventForm
          eventDateProp={eventDate}
          showModal={showModal}
          setShowModal={setShowModal}
          setEventsInd={setEventsInd}
        />
      </div>
    </Modal>
  );
}
