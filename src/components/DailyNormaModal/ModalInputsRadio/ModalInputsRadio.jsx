import { Field } from 'formik';

import css from './ModalInputsRadio.module.css';

const ModalInputsRadio = () => {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <Field type={'radio'} name={'gender'} id={'woman'} value="woman" />
        <label className={css.label} htmlFor="woman">
          For woman
        </label>
      </div>
      <div className={css.wrap}>
        <Field type={'radio'} name={'gender'} id={'man'} value="man" />
        <label className={css.label} htmlFor="man">
          For man
        </label>
      </div>
    </div>
  );
};

export default ModalInputsRadio;
