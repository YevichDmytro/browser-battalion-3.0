import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import css from './Header.module.css';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Container from '../ui/Container/Container';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';

const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Link to="/">
          <Logo />
        </Link>
        {isAuthenticated ? (
          <UserLogo />
        ) : (
          <div className={css.rightContainer}>
            <ThemeSwitcher />
            <UserAuth />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
