import css from './TodayWaterListItem.module.css';

const TodayWaterListItem = ({ openEditModal, item, openDeleteModal }) => {
    const time = item.dateTime.split(' ')[1].slice(0, 5);

    return (
        <div className={css.container}>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="./home-page/icons.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>{item.value}ml</p>
                    <p className={css.timeInfo}>{time}</p>
                </div>
                <div className={css.iconsContainer}>
                    <button onClick={openEditModal} className={css.iconsButton} type="button">
                        <svg className={css.notebook}>
                            <use href="./home-page/icons.svg#icon-note"></use>
                        </svg>
                    </button>
                    <button onClick={openDeleteModal} className={css.iconsButton} type="button">
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
