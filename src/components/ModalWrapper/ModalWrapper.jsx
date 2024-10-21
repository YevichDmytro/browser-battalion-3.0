import { useEffect } from 'react';
import Modal from 'react-modal';

import css from './ModalWrapper.module.css';

Modal.setAppElement('#root');

const ModalWrapper = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={css.modal}
      overlayClassName={css.backdrop}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          <svg width="16" height="16" className={css.iconClose}>
            <use href={`/src/assets/logout/x-btn.svg#x-btn`}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
