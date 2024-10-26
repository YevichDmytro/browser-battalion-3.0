import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';
import css from './MonthStatsTable.module.css';
import { getMonthWaterData } from '../../redux/waterTracker/operations';
import {
  selectFormattedMonth,
  selectMonthData,
  selectWaterIsMonthLoading,
} from '../../redux/waterTracker/selectors';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const monthData = useSelector(selectMonthData);
  const isLoading = useSelector(selectWaterIsMonthLoading);
  const formattedDate = useSelector(selectFormattedMonth);

  const getCurrentMonth = () => {
    const today = new Date();
    return `${today.getMonth() + 1}-${today.getFullYear()}`;
  };

  const isFutureMonth = () => {
    const [selectedMonth, selectedYear] = currentMonth.split('-').map(Number);
    const [currentMonthNumber, currentYear] = getCurrentMonth()
      .split('-')
      .map(Number);

    return (
      selectedYear > currentYear ||
      (selectedYear === currentYear && selectedMonth >= currentMonthNumber)
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dayData, setDayData] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isNextDisabled, setIsNextDisabled] = useState(isFutureMonth());

  const modalRef = useRef();

  useEffect(() => {
    dispatch(getMonthWaterData(currentMonth));
    setIsNextDisabled(isFutureMonth());
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
    if (isLoading || isNextDisabled) return;
    changeMonth(1);
    setIsNextDisabled(isFutureMonth());
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
          <button
            onClick={handlePrevMonth}
            className={classNames(css.btn, css.btnPrev)}
          >
            <svg className={css.arrow}>
              <use href="./month-stats-table/icons.svg#arrow"></use>
            </svg>
          </button>
          <p>{formattedDate}</p>
          <button
            onClick={handleNextMonth}
            className={classNames(css.btn, css.btnNext)}
            disabled={isNextDisabled}
          >
            <svg className={css.arrow}>
              <use href="./month-stats-table/icons.svg#arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.bottom}>
        {isLoading ? (
          <div className={css.loader}>
            <div className={css.clockLoader}></div>
          </div>
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
