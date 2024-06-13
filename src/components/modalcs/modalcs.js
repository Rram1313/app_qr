import React from 'react';
import { navigate } from 'gatsby';
import "../modalcs/modalcs.css";
import BtnClose from "../buttons/BtnClose"

const Modalcs = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Sesión cerrada correctamente</h2>
            <BtnClose onClick={handleClose}>Cerrar</BtnClose>
          </div>
        </div>
      )}
    </>
  );
};

export default Modalcs;

