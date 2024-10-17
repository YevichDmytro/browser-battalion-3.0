import Button from '../ui/Button/Button'
import css from './WaterConsumptionTracker.module.css'
import icons from '../../assets/welcome-page/icons.svg'
import { useNavigate } from 'react-router-dom'

const WaterConsumptionTracker = () => {

    const navigate = useNavigate();

    const tryTrackerOnClick = () => {
        navigate('/signup')
    }

    return (
        <div className={css.justForCheck}>
            <div className={css.titleBox}>
                <h2 className={css.mainTitle}>Water consumption tracker</h2>
                <h3 className={css.titleDescription}>Record daily water intake and track</h3>
            </div>

            <div className={css.benefitsBox}>
                <h4 className={css.benefitsTitle}>Tracker Benefits</h4>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} height={32} width={32}>
                            <use href={`${icons}#icon-key`}></use>
                        </svg>
                        Habit drive
                    </li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} height={32} width={32}>
                            <use href={`${icons}#icon-statistic`}></use>
                        </svg>
                        Viev statistics
                    </li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} height={32} width={32}>
                            <use href={`${icons}#icon-calendar`}></use>
                        </svg>
                        Personal rate setting
                    </li>
                </ul>
            </div>

            <Button onClick={tryTrackerOnClick} className={css.trackerButton}>Try tracker</Button>
        </div>
    )
}

export default WaterConsumptionTracker;