import css from './HomePage.module.css';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';

const HomePage = () => {
  return (
    <Container className={css.homepage}>
      <div className={css.col}>
        <DailyNorma />
      </div>
      <div className={css.col}>
        <TodayWaterList />
      </div>
    </Container>
  );
};

export default HomePage;
