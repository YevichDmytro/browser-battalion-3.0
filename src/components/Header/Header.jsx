import { Link } from "react-router-dom";

import css from "./Header.module.css";

import Container from "../ui/Container/Container";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import Logo from "../Logo/Logo";

const Header = () => {
  const isAuth = true;

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Link to="/">
          <Logo />
        </Link>
        {isAuth ? <UserLogo /> : <UserAuth />}
      </Container>
    </header>
  );
};

export default Header;
