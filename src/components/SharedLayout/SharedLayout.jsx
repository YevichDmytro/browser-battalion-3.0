import css from "./SharedLayout.module.css";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const SharedLayout = ({ isAuthenticated }) => {
  return (
    <div className={css.layout}>
      <Header isAuthenticated={isAuthenticated} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
