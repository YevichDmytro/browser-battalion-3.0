import classNames from 'classnames';
import { forwardRef } from 'react';

import css from './DaysGeneralStats.module.css';

const DaysGeneralStats = forwardRef(({ dayData, className, style }, ref) => {
  return (
    <div className={classNames(css.modal, className)} style={style} ref={ref}>
      <ul className={css.modalList}>
        <li>
          <span className={css.dynamicElement}>{dayData.date}</span>
        </li>
        <li>
          Daily norma:
          <span className={css.dynamicElement}> {dayData.dailyNorma}</span>
        </li>
        <li>
          Fulfillment of the daily norm:
          <span className={css.dynamicElement}>
            {' '}
            {dayData.goalPercentage} %
          </span>
        </li>
        <li>
          How many servings of water:
          <span className={css.dynamicElement}>
            {' '}
            {dayData.consumptionCount}
          </span>
        </li>
      </ul>
    </div>
  );
});

DaysGeneralStats.displayName = 'DaysGeneralStats';

export default DaysGeneralStats;
