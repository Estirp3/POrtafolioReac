// src/components/ThemeSwitcherCard.jsx

import React from 'react';
import styles from '../../styles/modules/ThemeSwitcherCard.module.css';
import BentoCard from './BentoCard';
import { useTheme } from '../../hooks';

const ThemeSwitcherCard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BentoCard className={styles.themeCard} onClick={toggleTheme}>
      <div className={styles.content}>

        {/* CAMBIO: Aplica 'active' si el tema es 'light' */}
        <div
          className={`${styles.themeToggle} ${theme === 'light' ? styles.active : ''}`}
        ></div>

      </div>
    </BentoCard>
  );
};

export default ThemeSwitcherCard;