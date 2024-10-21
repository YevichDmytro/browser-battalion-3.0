import css from './BottleImg.module.css';

const BottleImg = ({ className = '' }) => {
  return (
    <picture className={className}>
      <source
        srcSet="./auth-page/bottle-mobil-1x.webp 1x, ./auth-page/bottle-mobil-2x.webp 2x"
        media="(max-width:767px)"
        type="image/webp"
      />
      <source
        srcSet="./auth-page/bottle-mobil-1x.png 1x, ./auth-page/bottle-mobil-2x.png 2x"
        media="(max-width:767px)"
        type="image/png"
      />

      <source
        srcSet="./auth-page/bottle-tabl-1x.webp 1x, ./auth-page/bottle-tabl-2x.webp 2x"
        media="(max-width:1439px)"
        type="image/webp"
      />
      <source
        srcSet="./auth-page/bottle-tabl-1x.png 1x, ./auth-page/bottle-tabl-2x.png 2x"
        media="(max-width:1439px)"
        type="image/png"
      />

      <source
        srcSet="./auth-page/bottle-deskt-1x.webp 1x, ./auth-page/bottle-deskt-2x.webp 2x"
        media="(min-width:1440px)"
        type="image/webp"
      />
      <source
        srcSet="./auth-page/bottle-deskt-1x.png 1x, ./auth-page/bottle-deskt-2x.png' 2x"
        media="(min-width:1440px)"
        type="image/png"
      />

      <img
        className={css.img}
        src="./auth-page/bottle-deskt-1x.png"
        alt="Bottle"
        width="916"
        height="680"
      />
    </picture>
  );
};

export default BottleImg;
