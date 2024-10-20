import { Outlet } from "react-router-dom";

import css from "./SharedLayout.module.css";

import Header from "../Header/Header";

import Loader from "../ui/Loader/Loader";

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Outlet />
      <Loader />
    </div>
  );
};

export default SharedLayout;
