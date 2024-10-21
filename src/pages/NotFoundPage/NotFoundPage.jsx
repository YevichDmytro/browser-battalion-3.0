import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.wrap}>
      <strong className={style.errNumber}>404</strong>
      <strong className={style.errMessage}>Page not found</strong>
    </div>
  );
};

export default NotFoundPage;
