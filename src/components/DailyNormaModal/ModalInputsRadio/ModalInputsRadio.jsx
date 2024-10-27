import { Field, useField } from 'formik';
import { useEffect } from 'react';

import css from './ModalInputsRadio.module.css';

const ModalInputsRadio = ({ onChange }) => {
  const [{ value }] = useField('gender');

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <Field type="radio" name="gender" id="female" value="female" />
        <label className={css.label} htmlFor="female">
          For woman
        </label>
      </div>
      <div className={css.wrap}>
        <Field type="radio" name="gender" id="male" value="male" />
        <label className={css.label} htmlFor="male">
          For man
        </label>
      </div>
    </div>
  );
};

export default ModalInputsRadio;
