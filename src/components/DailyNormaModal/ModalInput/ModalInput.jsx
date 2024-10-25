import { ErrorMessage, Field, useField } from 'formik';
import { useEffect, useId } from 'react';

import css from './ModalInput.module.css';

const ModalInput = ({ errors, touched, name, text, onChange }) => {
  const id = useId();
  const [{ value }] = useField(name);

  useEffect(() => {
    if (/^\d*$/.test(value)) {
      onChange && onChange(value);
    }
  }, [value, onChange]);

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
        id={`${name}-${id}`}
      />
      <ErrorMessage className={css.error} name={name} component="span" />
    </div>
  );
};

export default ModalInput;
