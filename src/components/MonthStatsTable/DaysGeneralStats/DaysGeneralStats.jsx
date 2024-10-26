import css from '../DaysGeneralStats/DaysGeneralStats.module.css';

const DaysGeneralStats = ({ dayData }) => {
  return (
    <div className={css.modal}>
      <ul className={css.modalList}>
        <li>
          <span className={css.dynamicElement}> {dayData.date}</span>
        </li>
        <li>
          Daily norma:
          <span className={css.dynamicElement}> {dayData.dailyNorma}</span>
        </li>
        <li>
          Fulfillment of the daily norm:
          <span className={css.dynamicElement}>
            <span> </span>
            {dayData.goalPercentage} %
          </span>
        </li>
        <li>
          How many servings of water:
          <span className={css.dynamicElement}>
            <span> </span>
            {dayData.consumptionCount}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DaysGeneralStats;
