import React from 'react';
import styles from './ThemeSwitcherCard.module.css'; // Importa su propio CSS Module
import BentoCard from './BentoCard'; // Asumiendo que exportas BentoCard

const ThemeSwitcherCard = () => {
  return (
    <BentoCard className={styles.themeCard}> {/* Usa su propia clase aquí */}
      <div className={styles.content}>
        {/* Aquí iría el ícono y el switch real */}
        <div className={styles.themeToggle}></div>
      </div>
    </BentoCard>
  );
};

export default ThemeSwitcherCard;