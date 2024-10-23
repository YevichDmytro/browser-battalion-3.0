import { ErrorMessage, Field } from 'formik';
import { useId } from 'react';

import css from './ModalInput.module.css';

const ModalInput = ({ errors, touched, name, text }) => {
  const id = useId();
  return (
    <div>
      {name === 'willDrink' ? (
        <h3>{text}</h3>
      ) : (
        <label htmlFor={name}>{text}</label>
      )}
      <Field
        className={`${
          errors.kilograms && touched.kilograms ? css.inputError : ''
        } ${css.input}`}
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
