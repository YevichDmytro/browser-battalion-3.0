import Logo from "../Logo/Logo";
import Container from "../ui/Container/Container";
import UserAuth from "../UserAuth/UserAuth";

const Header = ({ isAuthenticated }) => {
  return (
    <header>
      <Container>
        <Logo isAuthenticated={isAuthenticated} />
        <UserAuth />
      </Container>
    </header>
  );
};

export default Header;
