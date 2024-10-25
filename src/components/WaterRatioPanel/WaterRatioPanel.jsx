// import React, { useState } from 'react';
// import TodayListModal from './TodayListModal';
import css from './WaterRatioPanel.module.css';
import WaterProgress from '../WaterProgress/WaterProgress';

const WaterRatioPanel = () => {
  const waterGoal = 2000;
  // const [currentWater, setCurrentWater] = useState(0);
  // const [isModalOpen, setModalOpen] = useState(false);
  const currentWater = 1000;
  return (
    <div className={css.waterPanel}>
      <div className={css.waterProgressBar}>
        <h2 className={css.today}>Today</h2>
        <WaterProgress currentWater={currentWater} waterGoal={waterGoal} />
      </div>
      <button className={css.btnAddWater}>Add Water</button>
      {/* {isModalOpen && (
        <TodayListModal />
      )} */}
    </div>
  );
};

export default WaterRatioPanel;
