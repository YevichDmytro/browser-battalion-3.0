import css from './TodayWaterList.module.css';
import TodayWaterListItem from './TodayWaterListItem';
import Container from '../ui/Container/Container';

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
    <Container className={css.container}>
      <h2 className={css.title}>Today</h2>
      <ul>
        <TodayWaterListItem className={css.addWaterBox} openEditModal={openEditModal} />
      </ul>
      <button onClick={openAddModal} className={css.button} type="button">
        + Add water
      </button>
    </Container>
  );
};

export default TodayWaterList;
