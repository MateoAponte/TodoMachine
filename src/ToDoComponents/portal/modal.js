import React from 'react';
import ReactDOM from 'react-dom';

export function Modal({ showDeleteModal, children }) {
  return ReactDOM.createPortal(
    <div className="modal__overflow" style={{ display: showDeleteModal ? 'block' : 'none' }}>
      {children}
    </div>,
    document.getElementById('modal'),
  );
}
