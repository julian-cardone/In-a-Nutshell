import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);

  const slowOnClose = () => {
    console.log("Start close...");
    setTimeout(() => {
      console.log("Animating");
      onClose();
    }, 500);
  };

  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}

export function SlowModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);

  const slowOnClose = () => {
    const sessionModal = document.getElementById("sessionModal");
    const modalBackground = document.getElementById("modal-background");
    sessionModal.classList.remove(`opening`);
    sessionModal.classList.add(`closing`);
    modalBackground.classList.remove(`fadeIn`);
    modalBackground.classList.add("fadeOut");
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" className={`fadeIn`} onClick={slowOnClose} />
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}
