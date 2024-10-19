import classNames from "classnames";
import { useState } from "react";

import css from "./UserLogo.module.css";
import Icon from "../../assets/header/icons.svg";
import UserLogoModal from "../UserLogoModal/UserLogoModal";


const UserLogo = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleOpenMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className={css.container}>
      <button className={css.user} onClick={handleOpenMenu}>
        <p className={css.userName}>Username</p>
        <img src="" alt="" className={css.userImg} />
        <svg
          width="16"
          height="16"
          className={classNames(
            css.iconArrow,
            isMenuVisible && css.iconArrowActive
          )}
        >
          <use xlinkHref={`${Icon}#arrow`}></use>
        </svg>
      </button>
      <UserLogoModal
        className={isMenuVisible && css.modalActive}
        handleClose={handleCloseMenu}
      />
    </div>
  );
};

export default UserLogo;
