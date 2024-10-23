import css from './TodayWaterList.module.css';
import TodayWaterListItem from './TodayWaterListItem';

const TodayWaterList = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Today</h2>
      <ul>
        <TodayWaterListItem className={css.addWaterBox} />
      </ul>
      <button className={css.button} type="button">
        + Add water
      </button>
    </div>
  );
};

export default TodayWaterList;
