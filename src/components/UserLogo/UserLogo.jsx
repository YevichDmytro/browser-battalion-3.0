import { useState } from "react";
import Icon from "../../assets/header/icons.svg";
import UserLogoModal from "../UserLogoModal/UserLogoModal";

import css from "./UserLogo.module.css";
import classNames from "classnames";

const UserLogo = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className={css.container}>
      <button className={css.user} onClick={handleToggleMenu}>
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
          <use href={`${Icon}#arrow`}></use>
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
