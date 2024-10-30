import { useContext } from 'react';

import css from './BottleImg.module.css';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const BottleImg = ({ className = '' }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === 'dark';

  return (
    <picture className={className}>
      <source
        srcSet={
          isDarkTheme
            ? './darktheme/mobile-bottle-sign-in-1x.png 1x, ./darktheme/mobile-bottle-sign-in-2x.png 2x'
            : './auth-page/bottle-mobil-1x.png 1x, ./auth-page/bottle-mobil-2x.png 2x'
        }
        media="(max-width:767px)"
        type="image/png"
      />
      <source
        srcSet={
          isDarkTheme
            ? './darktheme/tablet-bottle-for-sign-in-1x.png 1x, ./darktheme/tablet-bottle-for-sign-in-2x.png 2x'
            : './auth-page/tablet-bottle-auth-1x.png 1x, ./auth-page/tablet-bottle-auth-2x.png 2x'
        }
        media="(max-width:1439px)"
        type="image/png"
      />
      <source
        srcSet={
          isDarkTheme
            ? './darktheme/desktop-bottle-for-sign-in-1x.png 1x, ./darktheme/desktop-bottle-for-sign-in-2x.png 2x'
            : './auth-page/desk-bottle-auth-1x.png 1x, ./auth-page/desk-bottle-auth-2x.png 2x'
        }
        media="(min-width:1440px)"
        type="image/png"
      />

      <img
        className={css.img}
        src={
          isDarkTheme
            ? './darktheme/desktop-bottle-for-sign-in-1x.png'
            : './auth-page/bottle-deskt-1x.png'
        }
        alt="Bottle"
        width="916"
        height="680"
      />
    </picture>
  );
};

export default BottleImg;
