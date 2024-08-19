/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Dialog({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Dialog;
