import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './MonthStatsTable.module.css';
import { getMonthWaterData } from '../../redux/waterTracker/operations';
import {
  selectMonthData,
  // selectWaterError,
  selectWaterIsLoading,
} from '../../redux/waterTracker/selectors';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const monthData = useSelector(selectMonthData);
  const isLoading = useSelector(selectWaterIsLoading);
  // const error = useSelector(selectWaterError);

  const getCurrentMonth = () => {
    const today = new Date();
    return `${today.getMonth() + 1}-${today.getFullYear()}`;
  };

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const formatMonth = monthYear => {
    const [month, year] = monthYear.split('-').map(Number);
    const date = new Date(year, month - 1);
    const formattedMonth = date.toLocaleString('en-US', { month: 'long' });
    return `${formattedMonth}, ${year}`;
  };

  useEffect(() => {
    dispatch(getMonthWaterData(currentMonth));
  }, [dispatch, currentMonth]);

  const changeMonth = increment => {
    const [month, year] = currentMonth.split('-').map(Number);
    const newDate = new Date(year, month - 1 + increment);
    setCurrentMonth(`${newDate.getMonth() + 1}-${newDate.getFullYear()}`);
  };

  const handlePrevMonth = () => changeMonth(-1);
  const handleNextMonth = () => changeMonth(1);

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
          <p>{formatMonth(currentMonth)}</p>
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
          <ul className={css.list}>
            {monthData.map((dayData, index) => (
              <li key={dayData.date} className={css.item}>
                <div className={css.day}>
                  <span>{index + 1}</span>
                </div>
                <p className={css.percentage}>{dayData.goalPercentage}%</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MonthStatsTable;
