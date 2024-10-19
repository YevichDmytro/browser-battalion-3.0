import React from "react";

import { ErrorMessage, Field } from "formik";
import { useId, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const AuthInputPassword = ({ css, errors, touched, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const id = useId();

  return (
    <div className={css.wrap}>
      <label className={css.label} htmlFor={`${type}${id}`}>
        {placeholder}
      </label>
      <Field
        className={`${
          errors.password && touched.password ? css.inputError : ""
        } ${css.input}`}
        type={showPassword ? "text" : "password"}
        name={type}
        placeholder={placeholder}
        id={`${type}${id}`}
      />
      <ErrorMessage className={css.error} name={type} component="span" />
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
    </div>
  );
};

export default AuthInputPassword;
