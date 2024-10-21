import classNames from 'classnames';
import { Link } from 'react-router-dom';

import css from './Button.module.css';

const Button = ({ children, className, variant = 'button', href }) => {
  const buttonStyles = classNames(css.button, className);

  if (variant === 'link') {
    return (
      <Link to={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return <button className={buttonStyles}>{children}</button>;
};

export default Button;
