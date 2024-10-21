import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import style from './UserLogoutModal.module.css';
import { logout } from '../../redux/auth/operations.js';
import Container from '../ui/Container/Container.jsx';

const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

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
  }, [isOpen, onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Container>
      <div className={style.backdrop} onClick={handleBackdropClick}>
        <div className={style.wrapModal}>
          <div className={style.wrapTitle}>
            <h2 className={style.title}>Logout</h2>
            <button className={style.closeBtn} onClick={onClose}>
              <svg width="16" height="16">
                <use href="./logout/x-btn.svg#x-btn"></use>
              </svg>
            </button>
          </div>
          <p className={style.text}>Do you really want to leave?</p>
          <div className={style.wrapButtons}>
            <button
              className={style.logoutBtn}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
            <button className={style.cancelBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserLogoutModal;
