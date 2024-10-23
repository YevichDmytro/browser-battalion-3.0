import { Field } from 'formik';

import css from './ModalInputsRadio.module.css';

const ModalInputsRadio = () => {
  return (
    <div>
      <div>
        <Field
          className={css.input}
          type={'radio'}
          name={'gender'}
          id={'woman'}
          value="woman"
        />
        <label htmlFor="woman">For woman</label>
      </div>
      <div>
        <Field
          className={css.input}
          type={'radio'}
          name={'gender'}
          id={'man'}
          value="man"
        />
        <label htmlFor="man">For man</label>
      </div>
    </div>
  );
};

export default ModalInputsRadio;
