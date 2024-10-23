import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import css from './ModalForm.module.css';
import ModalInput from '../ModalInput/ModalInput';
import ModalInputsRadio from '../ModalInputsRadio/ModalInputsRadio';

const ModalForm = () => {
  const [liters, setLiters] = useState('2');

  const handleSubmit = (values, actions) => {
    const { gender, mass, time } = values;

    if (gender === 'man') {
      const volume = (mass * 0.04 + time * 0.6).toFixed(1);
      setLiters(volume.toString());
    } else {
      const volume = (mass * 0.03 + time * 0.4).toFixed(1);
      setLiters(volume.toString());
    }

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
        mass: '',
        time: '',
        willDrink: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <ModalInputsRadio />
          <ModalInput
            errors={errors}
            touched={touched}
            name={'mass'}
            text={'Your weight in kilograms:'}
          />
          <ModalInput
            errors={errors}
            touched={touched}
            name={'time'}
            text={
              'The time of active participation in sports or other activities with a high physical. load in hours:'
            }
          />
          <div>
            <p>The required amount of water in liters per day:</p>
            <p>{liters} L</p>
          </div>
          <ModalInput
            errors={errors}
            touched={touched}
            name={'willDrink'}
            text={'Write down how much water you will drink:'}
          />
          <button className={css.button} type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ModalForm;
