import React from 'react';

import css from './DailyNorma.module.css';
import BottleImg from '../BottleImg/BottleImg';
import Container from '../ui/Container/Container';

const DailyNorma = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.title}>My daily norma</p>
        <div className={css.wrap}>
          <p className={css.normaText}>2 L</p>
          <button className={css.editBtn}>Edit</button>
        </div>
      </div>
      <BottleImg className={css.picture} />
    </div>
  );
};

export default DailyNorma;
