import classNames from "classnames";

import css from "./UserLogoModal.module.css";
import Icon from "../../assets/header/icons.svg";

const UserLogoModal = ({ className, handleClose }) => {
  return (
    <div className={classNames(css.modal, className)}>
      <ul className={css.list}>
        <li className={css.item}>
          <button className={css.btn} onClick={handleClose}>
            <svg width="16" height="16" className={css.icon}>
              <use href={`${Icon}#settings`}></use>
            </svg>
            <p className={css.text}>Setting</p>
          </button>
        </li>
        <li className={css.item}>
          <button className={css.btn} onClick={handleClose}>
            <svg width="16" height="16" className={css.icon}>
              <use href={`${Icon}#logout`}></use>
            </svg>
            <p className={css.text}>Log out</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserLogoModal;
