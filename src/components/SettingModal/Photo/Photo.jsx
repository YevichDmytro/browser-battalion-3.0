import clsx from "clsx";
import { useId } from "react";

import styles from "./Photo.module.css";

const Photo = ({ avatar, isSubmitBlocked, handleAvatarChange }) => {
  const fileInputId = useId();
  const defaultAvatar = "/public/SettingModalIcon/User-avatar.svg.png";
  const currentAvatar = avatar || defaultAvatar;

  return (
    <div className={styles.photoContainer}>
      <h3 className={styles.photoSubtitle}>Your Photo</h3>
      <div className={styles.photoWrapper}>
        <img
          className={styles.photoAvatar}
          src={currentAvatar}
          alt="Your avatar"
        />
        <div className={styles.uploadWrapper}>
          <label
            htmlFor={fileInputId}
            className={clsx(styles.uploadLabel, {
              [styles.disabled]: isSubmitBlocked,
            })}
          >
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
