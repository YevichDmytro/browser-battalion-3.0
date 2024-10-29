import { useContext } from 'react';

import css from './ThemeSwitcher.module.css';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={css.themeSwitcherContainer}>
      <input
        type="checkbox"
        className={css.checkbox}
        id="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="checkbox" className={css.checkboxLabel}>
        <i className={`${css.icon} ${css.moon}`} aria-hidden="true">
          🌙
        </i>
        <i className={`${css.icon} ${css.sun}`} aria-hidden="true">
          ☀️
        </i>
        <span className={css.ball}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
