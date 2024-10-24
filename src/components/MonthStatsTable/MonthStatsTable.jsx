import classNames from 'classnames';

import css from './MonthStatsTable.module.css';

const MonthStatsTable = () => {
  const days = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className={css.container}>
      <div className={css.top}>
        <p className={css.title}>Month</p>
        <div className={css.date}>
          <button>
            <svg className={classNames(css.arrow, css.arrowLeft)}>
              <use href="./month-stats-table/icons.svg#arrow"></use>
            </svg>
          </button>
          <p>April, 2023</p>
          <button>
            <svg className={classNames(css.arrow, css.arrowRight)}>
              <use href="./month-stats-table/icons.svg#arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <ul className={css.list}>
        {days.map(day => (
          <li key={day} className={css.item}>
            <div className={css.day}>
              <span>{day}</span>
            </div>
            <p className={css.percentage}>50%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthStatsTable;
