import classNames from "classnames";
import css from "./Button.module.css";

const Button = ({ children, className }) => {
  const buttonStyles = classNames(css.button, className);

  return <button className={buttonStyles}>{children}</button>;
};

export default Button;
