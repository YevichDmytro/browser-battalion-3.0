import css from './Auth.module.css';
import AuthBottleImg from '../AuthBottleImg/AuthBottleImg';
import AuthForm from '../AuthForm/AuthForm';
import Container from '../ui/Container/Container';

const Auth = () => {
  return (
    <section className={css.section}>
      <Container className={css.container}>
        <AuthForm />
        <AuthBottleImg />
      </Container>
    </section>
  );
};

export default Auth;
