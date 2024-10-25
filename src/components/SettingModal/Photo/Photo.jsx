import clsx from 'clsx';
import { useId } from 'react';
import { useSelector } from 'react-redux';

import styles from './Photo.module.css';
import { selectUser } from '../../../redux/auth/selectors';

const Photo = ({ isSubmitBlocked, handleAvatarChange }) => {
  const { name, email, photo } = useSelector(selectUser);
  const fileInputId = useId();
  const defaultAvatar = '/public/SettingModalIcon/User-avatar.svg.png';
  const currentAvatar = photo || defaultAvatar;
  const userName = name || email || 'User';
  const nameFirstLetter = userName.charAt(0).toUpperCase();

  return (
    <div className={styles.photoContainer}>
      <h3 className={styles.photoSubtitle}>Your Photo</h3>
      <div className={styles.photoWrapper}>
        {photo ? (
          <img
            className={styles.photoAvatar}
            src={currentAvatar}
            alt="Your avatar"
          />
        ) : (
          <span className={styles.userImgAlternative}>{nameFirstLetter}</span>
        )}
        <div className={styles.uploadWrapper}>
          <label
            htmlFor={fileInputId}
            className={clsx(styles.uploadLabel, {
              [styles.disabled]: isSubmitBlocked,
            })}
          >
            <span>
              <svg width="16" height="16" className={styles.icon}>
                <use href={`/SettingModalIcon/icon.svg#icon-outline`}></use>
              </svg>
            </span>
            Upload a photo
          </label>
          <input
            id={fileInputId}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            disabled={isSubmitBlocked}
            className={styles.fileInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
