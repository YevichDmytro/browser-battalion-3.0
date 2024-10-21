import Container from '../ui/Container/Container.jsx';
import { IoClose } from 'react-icons/io5';
import style from './UserLogoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';

const UserLogoutModal = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div className={style.wrap}>
        <div className={style.wrapModal}>
          <div className={style.wrapTitle}>
            <h2 className={style.title}>Logout</h2>
            <button className={style.closeBtn}>
              <IoClose className={style.closeIcon} />
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
            <button className={style.cancelBtn}>Cancel</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserLogoutModal;
