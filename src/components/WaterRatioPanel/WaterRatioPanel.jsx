import React, { useState } from 'react';
// import TodayListModal from './TodayListModal';
import WaterProgress from '../WaterProgress/WaterProgress';
import css from './WaterRatioPanel.module.css';
const WaterRatioPanel = () => {
  const waterGoal = 2000;
  // const [currentWater, setCurrentWater] = useState(0);
  // const [isModalOpen, setModalOpen] = useState(false);
  const currentWater = 1500;
  return (
    <div className={css.waterPanel}>
      <h2 className={css.today}>Today</h2>
      <WaterProgress currentWater={currentWater} waterGoal={waterGoal} />
      <button className={css.btnAddWater}>Add Water</button>
      {/* {isModalOpen && (
        <TodayListModal />
      )} */}
    </div>
  );
};

export default WaterRatioPanel;
