import logo from '../../../public/images/animation_image/Logo.png';

const Animation = () => {
  return (
    <div className="animation">
      <div className="image">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="title">
        <span className="title_top">TRACKER</span>
        <span className="title_bottom">OF WATER</span>
      </div>
    </div>
  );
};

export default Animation;
