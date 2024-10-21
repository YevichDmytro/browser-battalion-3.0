import DailyNorma from '../../components/DailyNorma/DailyNorma';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <DailyNorma />
      <TodayWaterList />
    </Container>
  );
};

export default HomePage;
