import Container from "../../components/ui/Container/Container";
import WaterConsumptionTracker from "../../components/WaterConsumptionTracker/WaterСonsumptionTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import css from './WelcomePage.module.css'

export default function WelcomePage() {
    return (
        <Container className={css.background}>
            <div>
                <div className={css.sizeBox}>
                    <WaterConsumptionTracker />
                    <WhyDrinkWater />
                </div>
            </div>
        </Container>
    )
}