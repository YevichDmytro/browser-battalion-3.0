const Logo = () => {
  return (
    <img
      srcSet={`./header/logo-min.png 1x, ./header/logo-2x-min.png2x`}
      src="./header/logo-min.png"
      alt="Logotype"
    />
  );
};

export default Logo;
