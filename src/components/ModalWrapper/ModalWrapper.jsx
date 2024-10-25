import { useEffect } from 'react';
import Modal from 'react-modal';

import css from './ModalWrapper.module.css';

Modal.setAppElement('#root');

const ModalWrapper = ({ isOpen, onClose, children, modalType }) => {
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
      className={modalType === 'transparent' ? '' : css.defaultModal}
      overlayClassName={
        modalType === 'transparent'
          ? css.transparentOverlay
          : css.defaultOverlay
      }
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          <svg width="16" height="16" className={css.iconClose}>
            <use href={`/public/logout/x-btn.svg#x-btn`}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
