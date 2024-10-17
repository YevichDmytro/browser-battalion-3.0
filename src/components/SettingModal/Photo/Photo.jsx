import { useId } from "react";
import clsx from "clsx";
import styles from "./Photo.module.css";

export default function Photo({ avatar, isSubmitBlocked, handleAvatarChange }) {
  const fileInputId = useId();
  const defaultAvatar = "/path/to/default-avatar.jpg"; // Use a real default image path
  const currentAvatar = avatar || defaultAvatar;

  return (
    <div className={styles.photoContainer}>
      <h3 className={styles.photoSubtitle}>Your Photo</h3>
      <div className={styles.photoWrapper}>
        <img
          className={styles.photoAvatar}
          src="data:image/jpeg;base64,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"
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
}
