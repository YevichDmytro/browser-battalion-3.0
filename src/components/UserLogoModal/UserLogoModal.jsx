import classNames from 'classnames';

import css from './UserLogoModal.module.css';

const UserLogoModal = ({ onLogoutClose, onSettingsClose, isVisible }) => {
  return (
    <div className={classNames(css.modal, isVisible && css.modalActive)}>
      <ul className={css.list}>
        <li className={css.item}>
          <button className={css.btn} onClick={onSettingsClose}>
            <svg width="16" height="16" className={css.icon}>
              <use href="./header/icons.svg#settings"></use>\
            </svg>
            <p className={css.text}>Setting</p>
          </button>
        </li>
        <li className={css.item}>
          <button className={css.btn} onClick={onLogoutClose}>
            <svg width="16" height="16" className={css.icon}>
              <use href="./header/icons.svg#logout"></use>
            </svg>
            <p className={css.text}>Log out</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserLogoModal;
