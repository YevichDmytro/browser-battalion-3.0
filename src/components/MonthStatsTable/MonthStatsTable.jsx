import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';
import css from './MonthStatsTable.module.css';
import { getMonthWaterData } from '../../redux/waterTracker/operations';
import {
  selectFormattedMonth,
  selectMonthData,
  selectWaterIsLoading,
} from '../../redux/waterTracker/selectors';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const monthData = useSelector(selectMonthData);
  const isLoading = useSelector(selectWaterIsLoading);
  const formattedDate = useSelector(selectFormattedMonth);

  const getCurrentMonth = () => {
    const today = new Date();
    return `${today.getMonth() + 1}-${today.getFullYear()}`;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dayData, setDayData] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const modalRef = useRef();

  useEffect(() => {
    dispatch(getMonthWaterData(currentMonth));
  }, [dispatch, currentMonth]);

  const changeMonth = increment => {
    const [month, year] = currentMonth.split('-').map(Number);
    const newDate = new Date(year, month - 1 + increment);
    setCurrentMonth(`${newDate.getMonth() + 1}-${newDate.getFullYear()}`);
  };

  const handlePrevMonth = () => {
    if (isLoading) return;
    changeMonth(-1);
  };
  const handleNextMonth = () => {
    if (isLoading) return;
    changeMonth(1);
  };

  const handleDayClick = (data, event) => {
    const liElement = event.currentTarget;
    const rect = liElement.getBoundingClientRect();

    setModalPosition({
      top: rect.top + window.scrollY - 100,
      left: rect.left + window.scrollX + rect.width / 2,
    });
    setDayData(data);
    setIsModalOpen(true);
  };

  const handleModalClose = e => {
    const isListItemClick = e.target.closest('li') !== null;

    if (!isListItemClick) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleModalClose);
    }
    return () => {
      document.removeEventListener('click', handleModalClose);
    };
  }, [isModalOpen]);

  return (
    <div className={css.container}>
      <div className={css.top}>
        <p className={css.title}>Month</p>
        <div className={css.date}>
          <button onClick={handlePrevMonth}>
            <svg className={classNames(css.arrow, css.arrowLeft)}>
              <use href="./month-stats-table/icons.svg#arrow"></use>
            </svg>
          </button>
          <p>{formattedDate}</p>
          <button onClick={handleNextMonth}>
            <svg className={classNames(css.arrow, css.arrowRight)}>
              <use href="./month-stats-table/icons.svg#arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.bottom}>
        {isLoading ? (
          <span className={css.loader}>Loading</span>
        ) : (
          <>
            <ul className={css.list}>
              {monthData.map((dayData, index) => (
                <li
                  key={dayData.date}
                  className={css.item}
                  onClick={event => handleDayClick(dayData, event)}
                >
                  <div className={css.day}>
                    <span>{index + 1}</span>
                  </div>
                  <p className={css.percentage}>{dayData.goalPercentage}%</p>
                </li>
              ))}
            </ul>
            {isModalOpen && (
              <DaysGeneralStats
                ref={modalRef}
                dayData={dayData}
                handleClose={handleModalClose}
                style={{
                  position: 'absolute',
                  top: `${modalPosition.top}px`,
                  left: `${modalPosition.left}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MonthStatsTable;
