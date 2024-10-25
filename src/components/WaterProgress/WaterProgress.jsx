import css from './WaterProgress.module.css';
const WaterProgress = ({ currentWater, waterGoal }) => {
  const progress = (currentWater / waterGoal) * 100;

  return (
    <div className={css.waterProgress}>
      <div className={css.waterProgressBar} style={{ width: `${progress}%` }}>
        {currentWater} / {waterGoal} ml
      </div>
      <div className={css.block}>
        <div className={css.blocks}>
          <div className={css.block1}>|</div>
          <div>0%</div>
        </div>
        <div className={css.blocks}>
          <div className={css.block2}>|</div>
          <div>50%</div>
        </div>
        <div className={css.blocks}>
          <div className={css.block3}>|</div>
          <div>100%</div>
        </div>
      </div>
    </div>
  );
};

export default WaterProgress;
