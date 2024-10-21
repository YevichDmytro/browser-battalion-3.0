import css from './TodayWaterList.module.css';
import TodayWaterListItem from './TodayWaterListItem';
import Container from '../ui/Container/Container';

const TodayWaterList = () => {
  return (
    <Container className={css.container}>
      <h2 className={css.title}>Today</h2>
      <ul>
        <TodayWaterListItem className={css.addWaterBox} />
      </ul>
      <button className={css.button} type="button">
        + Add water
      </button>
    </Container>
  );
};

export default TodayWaterList;
