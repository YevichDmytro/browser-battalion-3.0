import { ErrorMessage, Field } from 'formik';
import { useId } from 'react';

import css from './ModalInput.module.css';

const ModalInput = ({ errors, touched, name, text }) => {
  const id = useId();
  return (
    <div className={css.wrap}>
      {name === 'willDrink' ? (
        <h3 className={css.subtitle}>{text}</h3>
      ) : (
        <label className={css.label} htmlFor={name}>
          {text}
        </label>
      )}
      <Field
        className={`${errors[name] && touched[name] ? css.inputError : ''} ${
          css.input
        }`}
        type={'text'}
        name={name}
        placeholder={'0'}
        id={`${name}-${id}`}
      />
      <ErrorMessage className={css.error} name={name} component="span" />
    </div>
  );
};

export default ModalInput;
