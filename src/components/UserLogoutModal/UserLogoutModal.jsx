import Container from '../ui/Container/Container.jsx';
import Button from '../ui/Button/Button.jsx';
import { IoClose } from 'react-icons/io5';
import style from './UserLogoutModal.module.css';

const UserLogoutModal = () => {
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
            <Button className={style.logoutBtn}>Logout</Button>
            <Button className={style.cancelBtn}>Cancel</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserLogoutModal;
