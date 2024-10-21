import { useEffect } from 'react';

import css from './Loader.module.css';

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={css['loader-container']}>
      <span className={css.loader}>Load&nbsp;ng</span>
    </div>
  );
};

export default Loader;
