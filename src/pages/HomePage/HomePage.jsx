import css from './HomePage.module.css';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <DailyNorma />
      <div className={css.rightContainer}>
        <TodayWaterList />
        <MonthStatsTable />
      </div>
    </Container>
  );
};

export default HomePage;
