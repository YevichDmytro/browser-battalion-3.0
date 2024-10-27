import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import css from './ModalForm.module.css';
import { updateWaterRate } from '../../../redux/auth/operations';
import ModalInput from '../ModalInput/ModalInput';
import ModalInputsRadio from '../ModalInputsRadio/ModalInputsRadio';

const ModalForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [milliliters, setMilliliters] = useState('0');
  const [gender, setGender] = useState('woman');
  const [mass, setMass] = useState('0');
  const [time, setTime] = useState('0');

  useEffect(() => {
    const numericMass = parseFloat(mass) || 0;
    const numericTime = parseFloat(time) || 0;

    let volume;
    if (gender === 'man') {
      volume = (numericMass * 0.04 + numericTime * 0.6) * 1000;
    } else {
      volume = (numericMass * 0.03 + numericTime * 0.4) * 1000;
    }

    setMilliliters(volume.toFixed(1));
  }, [gender, mass, time]);

  const handleSubmit = (values, actions) => {
    const willDrinkInMilliliters = parseFloat(values.willDrink) * 1000;
    const waterRate =
      willDrinkInMilliliters > 0 ? willDrinkInMilliliters : milliliters;

    const updatedValues = {
      waterRate,
    };

    dispatch(updateWaterRate(updatedValues))
      .unwrap()
      .then(() => {
        toast.success('Water rate has been updated successfully!');
        onClose();
      })
      .catch(error => {
        toast.error(`${error}`);
      })
      .finally(() => {
        actions.resetForm();
      });
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
              <p className={css.litersText}>
                {(milliliters / 1000).toFixed(1)} L
              </p>
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
