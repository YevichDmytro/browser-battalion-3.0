import css from './Auth.module.css';
import AuthBottleImg from '../AuthBottleImg/AuthBottleImg';
import AuthForm from '../AuthForm/AuthForm';

const Auth = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <AuthForm />
        <AuthBottleImg />
      </div>
    </section>
  );
};

export default Auth;
