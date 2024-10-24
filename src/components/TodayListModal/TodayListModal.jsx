import { Formik, Form, Field } from 'formik';
import { useId, useState } from 'react';

import css from './TodayListModal.module.css';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const TodayListModal = ({ isModalOpen, setIsModalOpen, isAddModal }) => {
    const [amountOfWater, setAmountOfWater] = useState(0);
    const [isTimeSelectOpen, setIsTimeSelectOpen] = useState(false);
    const idForTimerField = useId();
    const idForAmountField = useId();

    const getCurrentTimeRounded = () => {
        const now = new Date();
        const minutes = Math.ceil(now.getMinutes() / 5) * 5;
        now.setMinutes(minutes);
        return now.toTimeString().slice(0, 5);
    };

    const [currentTime, setCurrentTime] = useState(getCurrentTimeRounded());

    const initialValues = {
        time: currentTime,
        waterAmount: amountOfWater,
    };

    const amountCounter = (operation, setFieldValue) => {
        setAmountOfWater((prevAmount) => {
            const newAmount = operation === 'plus' ? prevAmount + 50 : Math.max(prevAmount - 50, 0);
            setFieldValue('waterAmount', newAmount);
            return newAmount;
        });
    };

    const timer = () => {
        const chooseTime = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 5) {
                const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
                chooseTime.push(<option key={time} value={time}>{time}</option>);
            }
        }
        return chooseTime;
    };

    const submitButton = (values, actions) => {
        console.log(values);
        actions.resetForm();
        setIsModalOpen(false);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalWrapper isOpen={isModalOpen} onClose={handleClose}>
            <Formik initialValues={initialValues} onSubmit={submitButton}>
                {({ setFieldValue }) => (
                    <Form className={css.form}>
                        <h2 className={css.mainTitle}>{isAddModal ? 'Add water' : "Edit the entered amount of water"}</h2>
                        {!isAddModal && (
                            <div className={css.previouWaterInfoWrapper}>
                                <div className={css.previouWaterInfoBox}>
                                    <svg height={36} width={36}>
                                        <use href='/public/home-page/icons.svg#icon-glass'></use>
                                    </svg>
                                    <div className={css.previuosWaterInfo}>
                                        <p className={css.previousWaterInfoAmount}>{amountOfWater}ml</p>
                                        <p className={css.previousWaterInfoTime}>7:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={css.chooseAmountBox}>
                            <h3 className={css.chooseTitle}>Choose a value:</h3>
                            <div className={css.amountOfWaterBox}>
                                <p className={css.amountText}>Amount of water:</p>
                                <div className={css.counterBox}>
                                    <button onClick={() => amountCounter('minus', setFieldValue)} className={css.addAmountButton} type='button'>
                                        <svg className={css.buttonSvgMinus} height={24} width={22}>
                                            <use href='/public/today-water-list/icons.svg#icon-minus'></use>
                                        </svg>
                                    </button>
                                    <p className={css.counterBoxAmount}>{amountOfWater}ml</p>
                                    <button onClick={() => amountCounter('plus', setFieldValue)} className={css.addAmountButton} type='button'>
                                        <svg className={css.buttonSvgPlus} height={24} width={23}>
                                            <use href='/public/today-water-list/icons.svg#icon-plus'></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={css.recordingtimeBox}>
                            <label className={css.recordingTimeLabel} htmlFor={idForTimerField}>Recording time:</label>
                            {isTimeSelectOpen ? (
                                <Field
                                    className={css.input}
                                    as='select'
                                    name='time'
                                    id={idForTimerField}
                                    onBlur={() => setIsTimeSelectOpen(false)}
                                >
                                    <option value='' />
                                    {timer()}
                                </Field>
                            ) : (
                                <Field
                                    className={css.input}
                                    type='text'
                                    readOnly
                                    value={currentTime}
                                    onClick={() => setIsTimeSelectOpen(true)}
                                />
                            )}
                        </div>
                        <div className={css.enterTheValueBox}>
                            <label className={css.enterTheValueLabel} htmlFor={idForAmountField}>Enter the value of the water used:</label>
                            <Field
                                className={css.input}
                                type="number"
                                name='waterAmount'
                                id={idForAmountField}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === '') {
                                        setAmountOfWater('');
                                        setFieldValue('waterAmount', '');
                                    } else {
                                        const numericValue = Number(value);
                                        setAmountOfWater(numericValue);
                                        setFieldValue('waterAmount', numericValue);
                                    }
                                }}
                            />
                        </div>
                        <div className={css.saveButtonBox}>
                            <p className={css.saveButtonAmount}>{amountOfWater}ml</p>
                            <button className={css.saveButton} type='submit'>Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    );
};

export default TodayListModal;
