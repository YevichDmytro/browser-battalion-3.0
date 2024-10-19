import Icon from "../../assets/header/icons.svg";
import css from "./UserAuth.module.css";

import { Link } from "react-router-dom";

const UserAuth = () => {
  return (
    <Link to="/signin" className={css.link}>
      Sign in
      <svg width="28" height="28" className={css.iconUser}>
        <use href={`${Icon}#user`}></use>
      </svg>
    </Link>
  );
};

export default UserAuth;
