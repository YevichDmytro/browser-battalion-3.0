import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import Header from '../Header/Header';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal.jsx';

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <UserLogoutModal />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
