import { Formik, Form, Field } from 'formik';
import { useId, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import css from './TodayListModal.module.css';
import {
  addWaterItem,
  getTodayWaterData,
  updateWaterItem,
} from '../../redux/waterTracker/operations';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const TodayListModal = ({
  isModalOpen,
  setIsModalOpen,
  isAddModal,
  editingItem,
  onAddWater,
}) => {
  const [value, setValue] = useState(0);
  const [isTimeSelectOpen, setIsTimeSelectOpen] = useState(false);
  const idForTimerField = useId();
  const idForValueField = useId();
  const dispatch = useDispatch();
  const getCurrentTimeRounded = () => {
    const now = new Date();
    const minutes = Math.ceil(now.getMinutes() / 5) * 5;
    now.setMinutes(minutes);
    return now.toTimeString().slice(0, 5);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTimeRounded());
  const [currentDate] = useState(getCurrentDate());

  useEffect(() => {
    if (!isAddModal && editingItem) {
      setValue(editingItem.value);
      setCurrentTime(editingItem.dateTime.split(' ')[1].slice(0, 5));
    } else {
      setValue(0);
      setCurrentTime(getCurrentTimeRounded());
    }
  }, [isAddModal, editingItem]);

  const initialValues = {
    time: currentTime,
    value: value,
  };

  const validationSchema = Yup.object({
    value: Yup.number()
      .max(5000, 'Maximum amount is 5000ml')
      .required('This field is required'),
  });

  const valueCounter = (operation, setFieldValue) => {
    setValue(prevValue => {
      let newValue = prevValue;

      if (operation === 'plus' && prevValue < 5000) {
        newValue = prevValue + 50;
      } else if (operation === 'minus' && prevValue > 0) {
        newValue = prevValue - 50;
      }

      setFieldValue('value', newValue);
      return newValue;
    });
  };

  const timerOptions = () => {
    const chooseTime = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const time = `${String(hour).padStart(2, '0')}:${String(
          minute
        ).padStart(2, '0')}`;
        chooseTime.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }
    return chooseTime;
  };

  const handleSubmit = (values, actions) => {
    const { time, value } = values;
    const fullDateTime = `${currentDate} ${time}:00`;

    if (isAddModal) {
      dispatch(addWaterItem({ dateTime: fullDateTime, value }))
        .then(() => {
          actions.resetForm();
          setIsModalOpen(false);
          dispatch(getTodayWaterData());
          toast.success('Successfully added water!');
        })
        .catch(error => {
          console.error('Failed to add water item:', error);
          toast.error('Failed to add water item!');
        });
    } else if (editingItem) {
      dispatch(
        updateWaterItem({
          id: editingItem._id,
          data: { dateTime: fullDateTime, value },
        })
      )
        .then(() => {
          actions.resetForm();
          setIsModalOpen(false);
          dispatch(getTodayWaterData());
          toast.success('Successfully updated water!');
        })
        .catch(error => {
          console.error('Failed to update water item:', error);
          toast.error('Failed to update water item!');
        });
    }
    try {
      if (isAddModal) {
        dispatch(addWaterItem({ value }));
        onAddWater(value);
        toast.success('Successfully added water!');
      }

      actions.resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to add water item:', error);
      toast.error('Failed to add water item!');
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalWrapper isOpen={isModalOpen} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <h2 className={css.mainTitle}>
              {isAddModal ? 'Add water' : 'Edit the entered amount of water'}
            </h2>

            {!isAddModal && editingItem && (
              <div className={css.previouWaterInfoWrapper}>
                <div className={css.previouWaterInfoBox}>
                  <svg height={36} width={36}>
                    <use href="./home-page/icons.svg#icon-glass"></use>
                  </svg>
                  <div className={css.previuosWaterInfo}>
                    <p className={css.previousWaterInfoAmount}>
                      {editingItem.value}ml
                    </p>
                    <p className={css.previousWaterInfoTime}>
                      {editingItem.dateTime.split(' ')[1].slice(0, 5)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className={css.chooseAmountBox}>
              <h3 className={css.chooseTitle}>Choose a value:</h3>
              <div className={css.amountOfWaterBox}>
                <p className={css.amountText}>Amount of water:</p>
                <div className={css.counterBox}>
                  <button
                    onClick={() => valueCounter('minus', setFieldValue)}
                    className={css.addAmountButton}
                    type="button"
                    disabled={value === 0}
                  >
                    <svg className={css.buttonSvgMinus} height={24} width={22}>
                      <use href="./today-water-list/icons.svg#icon-minus"></use>
                    </svg>
                  </button>
                  <p className={css.counterBoxAmount}>{value}ml</p>
                  <button
                    onClick={() => valueCounter('plus', setFieldValue)}
                    className={css.addAmountButton}
                    type="button"
                    disabled={value >= 5000}
                  >
                    <svg className={css.buttonSvgPlus} height={24} width={23}>
                      <use href="./today-water-list/icons.svg#icon-plus"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className={css.recordingtimeBox}>
              <label
                className={css.recordingTimeLabel}
                htmlFor={idForTimerField}
              >
                Recording time:
              </label>
              {isTimeSelectOpen ? (
                <Field
                  className={css.input}
                  as="select"
                  name="time"
                  id={idForTimerField}
                  onBlur={() => setIsTimeSelectOpen(false)}
                  onChange={e => {
                    const selectedTime = e.target.value;
                    setFieldValue('time', selectedTime);
                    setCurrentTime(selectedTime);
                  }}
                >
                  <option className={css} value="" />
                  {timerOptions()}
                </Field>
              ) : (
                <Field
                  className={css.input}
                  type="text"
                  readOnly
                  value={currentTime}
                  onClick={() => setIsTimeSelectOpen(true)}
                />
              )}
            </div>

            <div className={css.enterTheValueBox}>
              <label
                className={css.enterTheValueLabel}
                htmlFor={idForValueField}
              >
                Enter the value of the water used:
              </label>
              <Field
                className={css.input}
                type="number"
                name="value"
                id={idForValueField}
                max={5000}
                onBlur={e => {
                  let numericValue = Number(e.target.value);
                  if (isNaN(numericValue) || numericValue === 0) {
                    setFieldValue('value', 0);
                    setValue(0);
                  } else if (numericValue > 5000) {
                    setFieldValue('value', 5000);
                    setValue(5000);
                    toast.error('5000ml is the maximum allowed amount!');
                  } else {
                    setFieldValue('value', numericValue);
                    setValue(numericValue);
                  }
                }}
              />
            </div>

            <div className={css.saveButtonBox}>
              <p className={css.saveButtonAmount}>{value}ml</p>
              <button className={css.saveButton} type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default TodayListModal;
