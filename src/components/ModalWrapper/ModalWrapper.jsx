import { useCallback, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import css from './ModalWrapper.module.css';
import { selectUserLoading } from '../../redux/auth/selectors';
import { selectWaterIsLoading } from '../../redux/waterTracker/selectors';

Modal.setAppElement('#root');

const ModalWrapper = ({ isOpen, onClose, children }) => {
  const isUserLoading = useSelector(selectUserLoading);
  const isWaterLoading = useSelector(selectWaterIsLoading);

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
      {(isUserLoading || isWaterLoading) && (
        <div className={css.loader}>
          <div className={css.clockLoader}></div>
        </div>
      )}
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
