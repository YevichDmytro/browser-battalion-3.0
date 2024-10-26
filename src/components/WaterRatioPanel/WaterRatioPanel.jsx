import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import css from './WaterRatioPanel.module.css';
import { selectTodayData } from '../../redux/waterTracker/selectors';
import TodayListModal from '../TodayListModal/TodayListModal';
import WaterProgress from '../WaterProgress/WaterProgress';

const WaterRatioPanel = () => {
  const todayData = useSelector(selectTodayData);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddModal, setIsAddModal] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [currentWater, setCurrentWater] = useState(0);
  const openAddModal = () => {
    setIsAddModal(true);
    setModalOpen(true);
  };
  let waterGoal = 2000;
  useEffect(() => {
    if (Array.isArray(todayData)) {
      const totalWater = todayData.reduce(
        (total, item) => total + item.value,
        0
      );
      setCurrentWater(totalWater);
    }
  }, [todayData]);

  const handleAddWater = addedValue => {
    setCurrentWater(prev => prev + addedValue);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className={css.waterPanel}>
      <div className={css.waterProgressBar}>
        <h2 className={css.today}>Today</h2>
        <WaterProgress waterGoal={waterGoal} todayData={currentWater} />
      </div>
      <button className={css.btnAddWater} onClick={openAddModal}>
        <svg
          className={css.svg}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9V15M15 12H9M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="white"
          />
        </svg>
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
