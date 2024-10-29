import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './MonthStatsTable.module.css';
import { getMonthWaterData } from '../../redux/waterTracker/operations';
import {
  selectFormattedMonth,
  selectMonthData,
  selectWaterIsMonthLoading,
} from '../../redux/waterTracker/selectors';
import getCurrentMonth from '../../utils/getCurrentMonth.js';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats.jsx';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const monthData = useSelector(selectMonthData);
  const isLoading = useSelector(selectWaterIsMonthLoading);
  const formattedDate = useSelector(selectFormattedMonth);

  const modalRef = useRef();
  const containerRef = useRef(null);

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

  useEffect(() => {
    dispatch(getMonthWaterData(currentMonth));
    setIsNextDisabled(isFutureMonth());
  }, [dispatch, currentMonth]);

  const handleDayClick = (data, event) => {
    const liElement = event.currentTarget;
    const liRect = liElement.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const modalWidth = 300;

    let resultPosition;

    if (window.innerWidth < 768) {
      resultPosition = (containerRect.width - modalWidth) / 2 + 5;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      resultPosition =
        liRect.left - containerRect.left + liRect.width / 2 - modalWidth / 2;

      if (resultPosition < 0) {
        resultPosition = 0;
      } else if (resultPosition + modalWidth > containerRect.width) {
        resultPosition = containerRect.width - modalWidth;
      }
    } else {
      resultPosition = liRect.left - containerRect.left + liRect.width / 2;
    }

    setModalPosition({
      top: liRect.top - containerRect.top - 100,
      left: resultPosition,
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

  return (
    <div ref={containerRef} className={css.container}>
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
                  <div
                    className={classNames(
                      css.day,
                      dayData.goalPercentage === 100 && css.dayIsGoal
                    )}
                  >
                    <span>{index + 1}</span>
                  </div>
                  <p className={css.percentage}>
                    {dayData.goalPercentage || 0}%
                  </p>
                </li>
              ))}
            </ul>
            {isModalOpen && (
              <DaysGeneralStats
                ref={modalRef}
                dayData={dayData}
                handleClose={handleModalClose}
                style={{
                  top: `${modalPosition.top}px`,
                  left: `${modalPosition.left}px`,
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
