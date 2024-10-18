import { useId } from "react";
import { Field } from "formik";
import styles from "./Gender.module.css";

const Gender = () => {
  const womanRadioId = useId();
  const manRadioId = useId();

  return (
    <div className={styles.genderGroup}>
      <h3 className={styles.subtitle}>Your gender identity</h3>
      <div className={styles.radioGroup}>
        <label className={styles.radioLabel} htmlFor={womanRadioId}>
          <Field
            id={womanRadioId}
            type="radio"
            name="gender"
            value="woman"
            className={styles.radioInput}
          />
          <span className={styles.radioMark}></span>
          Woman
        </label>

        <label className={styles.radioLabel} htmlFor={manRadioId}>
          <Field
            id={manRadioId}
            type="radio"
            name="gender"
            value="man"
            className={styles.radioInput}
          />
          <span className={styles.radioMark}></span>
          Man
        </label>
      </div>
    </div>
  );
};

export default Gender;
