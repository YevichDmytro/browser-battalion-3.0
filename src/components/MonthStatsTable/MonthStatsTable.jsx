import classNames from 'classnames';
import { useState, useEffect } from 'react';

import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';
import DaysGeneralStatsCss from './DaysGeneralStats/DaysGeneralStats.module.css';
import css from './MonthStatsTable.module.css';

const MonthStatsTable = () => {
  const days = Array.from({ length: 20 }, (_, index) => index + 1);

  // налаштування відображення модального вікна
  const [isOpen, setIsOpen] = useState(false);

  const openGeneralStats = () => {
    setIsOpen(true);
  };

  const closeGeneralStats = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        closeGeneralStats();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    } else {
      window.removeEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <div>
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
            <li onClick={openGeneralStats} key={day} className={css.item}>
              <div className={css.day}>
                <span>{day}</span>
              </div>
              <p className={css.percentage}>50%</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={DaysGeneralStatsCss.position}>
        {isOpen && (
          <div
            className={DaysGeneralStatsCss.backdrop}
            onClick={closeGeneralStats}
          >
            <div
              className={DaysGeneralStatsCss.window}
              onClick={e => e.stopPropagation()} // модальне вікно не закриється, якщо клік буде всередині вікна
            >
              <DaysGeneralStats />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthStatsTable;
