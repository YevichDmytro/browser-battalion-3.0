import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './UserLogo.module.css';
// import Icon from '../../assets/header/icons.svg';
import { selectUser } from '../../redux/auth/selectors';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';

const UserLogo = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const user = useSelector(selectUser);
  const { name, email, photo } = user;

  const userName = name || email || 'User';
  const isUserPhoto = photo;
  const nameFirstLetter = userName.charAt(0).toUpperCase();

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  // const handleCloseMenu = () => {
  //   setMenuVisible(false);
  // };

  const handleLogoutClick = () => {
    setMenuVisible(false);
    setIsLogoutVisible(true);
  };

  const handleLogoutModalClose = () => {
    setIsLogoutVisible(false);
  };

  return (
    <div className={css.container}>
      <button className={css.user} onClick={handleToggleMenu}>
        <p className={css.userName}>{userName}</p>
        <div className={css.userPhotoContainer}>
          {isUserPhoto ? (
            <img src={photo} alt={name} className={css.userImg} />
          ) : (
            <span className={css.userImgAlternative}>{nameFirstLetter}</span>
          )}
        </div>
        <svg
          width="16"
          height="16"
          className={classNames(
            css.iconArrow,
            isMenuVisible && css.iconArrowActive
          )}
        >
          <use href="./header/icons.svg#arrow"></use>
        </svg>
      </button>
      <UserLogoModal
        isVisible={isMenuVisible}
        handleClose={handleLogoutClick}
      />
      <UserLogoutModal
        isOpen={isLogoutVisible}
        onClose={handleLogoutModalClose}
      />
    </div>
  );
};

export default UserLogo;
