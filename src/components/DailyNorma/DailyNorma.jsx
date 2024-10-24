import { useState } from 'react';

import css from './DailyNorma.module.css';
import BottleImg from '../BottleImg/BottleImg';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModel';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const DailyNorma = () => {
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
          <p className={css.normaText}>2 L</p>
          <button onClick={openEditModal} className={css.editBtn}>
            Edit
          </button>
        </div>
      </div>
      <BottleImg className={css.picture} />
      <ModalWrapper isOpen={isOpen} onClose={closeEditModal}>
        <DailyNormaModal />
      </ModalWrapper>
    </div>
  );
};

export default DailyNorma;
