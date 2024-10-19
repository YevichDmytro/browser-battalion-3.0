import css from "./AuthBottleImg.module.css";
import bottleDesktop1xPng from "../../assets/auth-page/bottle-deskt-1x.png";
import bottleDesktop1xWebp from "../../assets/auth-page/bottle-deskt-1x.webp";
import bottleDesktop2xPng from "../../assets/auth-page/bottle-deskt-2x.png";
import bottleDesktop2xWebp from "../../assets/auth-page/bottle-deskt-2x.webp";
import bottleMobile1xPng from "../../assets/auth-page/bottle-mobil-1x.png";
import bottleMobile1xWebp from "../../assets/auth-page/bottle-mobil-1x.webp";
import bottleMobile2xPng from "../../assets/auth-page/bottle-mobil-2x.png";
import bottleMobile2xWebp from "../../assets/auth-page/bottle-mobil-2x.webp";
import bottleTablet1xPng from "../../assets/auth-page/bottle-tabl-1x.png";
import bottleTablet1xWebp from "../../assets/auth-page/bottle-tabl-1x.webp";
import bottleTablet2xPng from "../../assets/auth-page/bottle-tabl-2x.png";
import bottleTablet2xWebp from "../../assets/auth-page/bottle-tabl-2x.webp";

const AuthBottleImg = () => {
  return (
    <picture className={css.picture}>
      <source
        srcSet={`${bottleMobile1xWebp} 1x, ${bottleMobile2xWebp} 2x`}
        media="(max-width:767px)"
        type="image/webp"
      />
      <source
        srcSet={`${bottleMobile1xPng} 1x, ${bottleMobile2xPng} 2x`}
        media="(max-width:767px)"
        type="image/png"
      />

      <source
        srcSet={`${bottleTablet1xWebp} 1x, ${bottleTablet2xWebp} 2x`}
        media="(max-width:1279px)"
        type="image/webp"
      />
      <source
        srcSet={`${bottleTablet1xPng} 1x, ${bottleTablet2xPng} 2x`}
        media="(max-width:1279px)"
        type="image/png"
      />

      <source
        srcSet={`${bottleDesktop1xWebp} 1x, ${bottleDesktop2xWebp} 2x`}
        media="(min-width:1280px)"
        type="image/webp"
      />
      <source
        srcSet={`${bottleDesktop1xPng} 1x, ${bottleDesktop2xPng} 2x`}
        media="(min-width:1280px)"
        type="image/png"
      />

      <img
        className={css.img}
        src={bottleDesktop1xPng}
        alt="Bottle"
        width="916"
        height="680"
      />
    </picture>
  );
};

export default AuthBottleImg;
