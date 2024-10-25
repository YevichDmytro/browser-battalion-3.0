import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import css from './WaterRatioPanel.module.css';
import { getTodayWaterData } from '../../redux/waterTracker/operations';
import TodayListModal from '../TodayListModal/TodayListModal';
import WaterProgress from '../WaterProgress/WaterProgress';

const WaterRatioPanel = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddModal, setIsAddModal] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [waterGoal, setWaterGoal] = useState(2000);
  const [currentWater, setCurrentWater] = useState(0);
  const openAddModal = () => {
    setIsAddModal(true);
    setModalOpen(true);
  };
  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const records = await dispatch(getTodayWaterData()).unwrap();
        setCurrentWater(
          records.reduce((total, record) => total + record.value, 0)
        );
        setWaterGoal(2000);
      } catch (error) {
        console.error('Failed to fetch water data:', error);
      }
    };

    fetchWaterData();
  }, [dispatch]);

  const handleAddWater = addedValue => {
    setCurrentWater(prev => prev + addedValue); // Обновляем текущее количество воды
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className={css.waterPanel}>
      <div className={css.waterProgressBar}>
        <h2 className={css.today}>Today</h2>
        <WaterProgress currentWater={currentWater} waterGoal={waterGoal} />
      </div>
      <button className={css.btnAddWater} onClick={openAddModal}>
        Add Water
      </button>
      {isModalOpen && (
        <TodayListModal
          isModalOpen={isModalOpen}
          setIsModalOpen={closeModal}
          isAddModal={isAddModal}
          editingItem={editingItem}
          onAddWater={handleAddWater}
        />
      )}
    </div>
  );
};

export default WaterRatioPanel;
