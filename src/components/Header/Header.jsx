import { Link } from "react-router-dom";

import css from "./Header.module.css";
import Logo from "../../assets/header/logo-min.png";
import Logo2x from "../../assets/header/logo@2x-min.png";
import Container from "../ui/Container/Container";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";

const Header = () => {
  const isAuth = true;

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Link to="/">
          <img
            srcSet={`${Logo} 1x, ${Logo2x} 2x`}
            src={`${Logo}`}
            alt="Logotype"
          />
        </Link>
        {isAuth ? <UserLogo /> : <UserAuth />}
      </Container>
    </header>
  );
};

export default Header;
