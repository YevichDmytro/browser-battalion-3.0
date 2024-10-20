import css from './Auth.module.css';
import AuthForm from '../AuthForm/AuthForm';
import BottleImg from '../BottleImg/BottleImg';
import Container from '../ui/Container/Container';

const Auth = () => {
  return (
    <section className={css.section}>
      <Container className={css.container}>
        <AuthForm />
        <BottleImg className={css.picture} />
      </Container>
    </section>
  );
};

export default Auth;
