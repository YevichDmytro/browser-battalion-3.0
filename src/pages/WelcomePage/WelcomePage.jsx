import css from './WelcomePage.module.css';
import Container from '../../components/ui/Container/Container';
import WaterConsumptionTracker from '../../components/WaterConsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';

const WelcomePage = () => {
  return (
    <section className={css.background}>
      <Container className={css.container}>
        <div>
          <div className={css.sizeBox}>
            <WaterConsumptionTracker />
            <WhyDrinkWater />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WelcomePage;
