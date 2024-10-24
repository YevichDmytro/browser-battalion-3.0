import css from './TodayWaterList.module.css';
import TodayWaterListItem from './TodayWaterListItem';

const TodayWaterList = ({ setModal, isAddModal }) => {
  
  const openAddModal = () => {
    setModal(true)
    isAddModal(true)
  }

  const openEditModal = () => {
    setModal(true)
    isAddModal(false)
  }




  return (
    <div className={css.container}>
      <h2 className={css.title}>Today</h2>
      <ul>
        <TodayWaterListItem className={css.addWaterBox} openEditModal={openEditModal} />
      </ul>
      <button onClick={openAddModal} className={css.button} type="button">
        + Add water
      </button>
    </div>
  );
};

export default TodayWaterList;
