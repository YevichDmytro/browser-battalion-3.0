import LogoImg from "../../assets/header/logo-min.png";
import LogoImg2x from "../../assets/header/logo@2x-min.png";

const Logo = () => {
  return (
    <img
      srcSet={`${LogoImg} 1x, ${LogoImg2x} 2x`}
      src={`${LogoImg}`}
      alt="Logotype"
    />
  );
};

export default Logo;
