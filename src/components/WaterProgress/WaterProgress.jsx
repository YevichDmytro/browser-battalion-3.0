import css from './WaterProgress.module.css';
const WaterProgress = ({ currentWater, waterGoal }) => {
  const progress = () => {
    if (currentWater > waterGoal) {
      currentWater = waterGoal;
    }
    const sum = (currentWater / waterGoal) * 100;
    return sum;
  };

  return (
    <div className={css.waterProgressContainer}>
      <div className={css.waterProgress}>
        <div
          className={css.waterProgressBar}
          style={{ width: `${progress()}%` }}
        >
          <svg
            className={css.progressIcon}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="6.5" fill="white" stroke="#407BFF" />
          </svg>
        </div>
      </div>
      <div className={css.block}>
        <div className={css.blocks}>
          <div className={css.block1}></div>

          <div>0%</div>
        </div>
        <div className={css.blocks}>
          <div className={css.block1}></div>
          <div>50%</div>
        </div>
        <div className={css.blocks}>
          <div className={css.block1}></div>
          <div>100%</div>
        </div>
      </div>
    </div>
  );
};

export default WaterProgress;
