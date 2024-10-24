import css from '../DaysGeneralStats/DaysGeneralStats.module.css';

const DaysGeneralStats = () => {
  return (
    <div>
      <ul className={css.windowList}>
        <li>
          <span className={css.dynamicElement}>5 April</span>
        </li>
        <li>
          Daily norma: <span className={css.dynamicElement}> 1.5 L</span>
        </li>
        <li>
          Fulfillment of the daily norm:
          <span className={css.dynamicElement}> 100%</span>
        </li>
        <li>
          How many servings of water:
          <span className={css.dynamicElement}> 6</span>
        </li>
      </ul>
    </div>
  );
};

export default DaysGeneralStats;
