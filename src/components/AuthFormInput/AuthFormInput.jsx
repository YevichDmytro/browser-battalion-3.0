import { ErrorMessage, Field } from 'formik';
import { useId, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

import css from './AuthFormInput.module.css';

const AuthFormInput = ({ errors, touched, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const id = useId();

  const getTypeForInput = () => {
    if (type === 'password' || type === 'repeatPassword') {
      return showPassword ? 'text' : 'password';
    } else return type;
  };

  return (
    <div className={css.wrap}>
      <label className={css.label} htmlFor={`${type}${id}`}>
        {placeholder}
      </label>
      <Field
        className={`${
          errors.password && touched.password ? css.inputError : ''
        } ${css.input}`}
        type={getTypeForInput()}
        name={type}
        placeholder={placeholder}
        id={`${type}${id}`}
      />
      <ErrorMessage className={css.error} name={type} component="span" />
      {getTypeForInput() !== 'email' && (
        <button
          type="button"
          className={css.hidePwdBtn}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <HiOutlineEye size={16} />
          ) : (
            <HiOutlineEyeOff size={16} />
          )}
        </button>
      )}
    </div>
  );
};

export default AuthFormInput;
