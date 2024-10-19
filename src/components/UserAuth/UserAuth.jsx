import { Link } from "react-router-dom";

import css from "./UserAuth.module.css";
import Icon from "../../assets/header/icons.svg";


const UserAuth = () => {
  return (
    <Link to="/signin" className={css.link}>
      Sign in
      <svg width="28" height="28" className={css.iconUser}>
        <use xlinkHref={`${Icon}#user`}></use>
      </svg>
    </Link>
  );
};

export default UserAuth;
