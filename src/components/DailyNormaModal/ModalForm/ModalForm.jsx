import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import css from './ModalForm.module.css';
import ModalInput from '../ModalInput/ModalInput';
import ModalInputsRadio from '../ModalInputsRadio/ModalInputsRadio';

const ModalForm = ({ onClose }) => {
  const [liters, setLiters] = useState('0');
  const [gender, setGender] = useState('woman');
  const [mass, setMass] = useState('0');
  const [time, setTime] = useState('0');

  useEffect(() => {
    if (gender === 'man') {
      const volume = (mass * 0.04 + time * 0.6).toFixed(1);
      setLiters(volume.toString());
    } else {
      const volume = (mass * 0.03 + time * 0.4).toFixed(1);
      setLiters(volume.toString());
    }
  }, [gender, mass, time]);

  const handleSubmit = (values, actions) => {
    onClose();
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    mass: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Required')
      .min(1, 'Too short')
      .max(10, 'Too long'),
    time: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Required')
      .min(1, 'Too short')
      .max(10, 'Too long'),
    willDrink: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(1, 'Too short')
      .max(10, 'Too long'),
  });

  return (
    <Formik
      initialValues={{
        gender: 'woman',
        mass: '0',
        time: '0',
        willDrink: '0',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => {
        const formikProps = { errors, touched };
        return (
          <Form className={css.form}>
            <ModalInputsRadio onChange={setGender} />
            <ModalInput
              {...formikProps}
              name="mass"
              text="Your weight in kilograms:"
              onChange={setMass}
            />
            <ModalInput
              {...formikProps}
              name="time"
              text="The time of active participation in sports or other activities with a high physical. load in hours:"
              onChange={setTime}
            />
            <div className={css.wrap}>
              <p className={css.discr}>
                The required amount of water in liters per day:
              </p>
              <p className={css.litersText}>{liters} L</p>
            </div>
            <ModalInput
              {...formikProps}
              name="willDrink"
              text="Write down how much water you will drink:"
            />
            <button className={css.button} type="submit">
              Save
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ModalForm;
