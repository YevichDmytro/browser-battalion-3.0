import css from './DailyNormaModal.module.css';
import ModalForm from './ModalForm/ModalForm';

const DailyNormaModal = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>My daily norma</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.textGender}>For girl:</p>
          <p className={css.textFormula}>V=(M*0,03) + (T*0,4)</p>
        </li>
        <li className={css.listItem}>
          <p className={css.textGender}>For man:</p>
          <p className={css.textFormula}>V=(M*0,04) + (T*0,6)</p>
        </li>
      </ul>
      <p className={css.discription}>
        <span>*</span> V is the volume of the water norm in liters per day, M is
        your body weight, T is the time of active sports, or another type of
        activity commensurate in terms of loads (in the absence of these, you
        must set 0)
      </p>
      <h3 className={css.subTitle}>Calculate your rate:</h3>
      <ModalForm />
    </div>
  );
};

export default DailyNormaModal;
