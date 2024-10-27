import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './DailyNorma.module.css';
import { selectUser } from '../../redux/auth/selectors';
import BottleImg from '../BottleImg/BottleImg';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModel';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const DailyNorma = () => {
  const user = useSelector(selectUser);
  const dailyNormaInLiters = user.waterRate ? user.waterRate / 1000 : 0;

  const [isOpen, setIsOpen] = useState(false);

  const openEditModal = () => {
    setIsOpen(true);
  };
  const closeEditModal = () => setIsOpen(false);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.title}>My daily norma</p>
        <div className={css.wrap}>
          <p className={css.normaText}>{dailyNormaInLiters} L</p>
          <button onClick={openEditModal} className={css.editBtn}>
            Edit
          </button>
        </div>
      </div>
      <BottleImg className={css.picture} />
      <ModalWrapper isOpen={isOpen} onClose={closeEditModal}>
        <DailyNormaModal onClose={closeEditModal} />
      </ModalWrapper>
    </div>
  );
};

export default DailyNorma;
