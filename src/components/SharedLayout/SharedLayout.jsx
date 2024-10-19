
import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;