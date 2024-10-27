import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import css from './TodayWaterListItem.module.css';
import { deleteWaterItem, getTodayWaterData } from '../../redux/waterTracker/operations';

const TodayWaterListItem = ({ openEditModal, item: { _id, dateTime, value } }) => {
    const dispatch = useDispatch();
    const time = dateTime.split(' ')[1].slice(0, 5);

    const handleDeleteWater = () => {
        dispatch(deleteWaterItem(_id))
            .then(() => {
              dispatch(getTodayWaterData())
              toast.success("Successfully delete water")
            })
            .catch((error) => {
                console.error('Failed to delete water item:', error);
                toast.error('Failed to delete water item');
            });
    };

    return (
        <div className={css.container}>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="./home-page/icons.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>{value}ml</p>
                    <p className={css.timeInfo}>{time}</p>
                </div>
                <div className={css.iconsContainer}>
                    <button onClick={openEditModal} className={css.iconsButton} type="button">
                        <svg className={css.notebook}>
                            <use href="./home-page/icons.svg#icon-note"></use>
                        </svg>
                    </button>
                    <button onClick={handleDeleteWater} className={css.iconsButton} type="button">
                        <svg className={css.trashbox}>
                            <use href="./home-page/icons.svg#icon-trash"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodayWaterListItem;
