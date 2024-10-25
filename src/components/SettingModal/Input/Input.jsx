import clsx from 'clsx';
import { Field, ErrorMessage } from 'formik';
import { useId, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

import styles from './Input.module.css';

const Input = ({ isError, label, placeholder, name, type, classNameTitle }) => {
  const inputId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const isPasswordType = type === 'password';
  const currentType = isPasswordVisible ? 'text' : type;

  return (
    <div className={styles.inputContainer}>
      <p
        className={
          classNameTitle === 'bigTitle' ? styles.bigTitle : styles.smallTitle
        }
      >
        {label}
      </p>
      <div className={styles.inputWrapper}>
        <Field
          id={inputId}
          type={currentType}
          name={name}
          placeholder={placeholder}
          className={clsx(styles.input, { [styles.errorInput]: isError })}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.toggleButton}
          >
            {isPasswordVisible ? (
              <HiOutlineEye size={16} />
            ) : (
              <HiOutlineEyeOff size={16} />
            )}
          </button>
        )}
        <ErrorMessage
          name={name}
          component="div"
          className={styles.errorMessage}
        />
      </div>
    </div>
  );
};

export default Input;
