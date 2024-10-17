import Button from "../ui/Button/Button";
import Container from "../ui/Container/Container";

const Header = () => {
  return (
    <header>
      <Container>
        {/* <Link to="/">LOGO</Link> */}
        <Button>Hello world</Button>
        {/* <Link to="/signin">Sign in</Link> */}
      </Container>
    </header>
  );
};

export default Header;
