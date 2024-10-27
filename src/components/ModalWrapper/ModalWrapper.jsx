import { useCallback, useEffect } from 'react';
import Modal from 'react-modal';

import css from './ModalWrapper.module.css';

Modal.setAppElement('#root');

const ModalWrapper = ({ isOpen, onClose, children }) => {
  const handleEscapeKey = useCallback(
    event => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscapeKey);
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose, handleEscapeKey]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={css.defaultModal}
      overlayClassName={css.defaultOverlay}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          <svg width="16" height="16" className={css.iconClose}>
            <use href={`./logout/x-btn.svg#x-btn`}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
