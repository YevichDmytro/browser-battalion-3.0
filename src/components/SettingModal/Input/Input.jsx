import { useId } from "react";
import clsx from "clsx";
import { Field, ErrorMessage } from "formik";
import css from "./Input.module.css";

const Input = ({ isError, label, placeholder, name, type, classNameTitle }) => {
  const inputId = useId();

  return (
    <div className={css.inputContainer}>
      <p
        className={
          classNameTitle === "bigTitle" ? css.bigTitle : css.smallTitle
        }
      >
        {label}
      </p>
      <div className={css.inputWrapper}>
        <Field
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          className={clsx(css.input, { [css.errorInput]: isError })}
        />
        <ErrorMessage
          name={name}
          component="div"
          className={css.errorMessage}
        />
      </div>
    </div>
  );
};

export default Input;
