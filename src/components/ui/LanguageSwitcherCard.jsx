import React from 'react';
import styles from '../../styles/modules/LanguageSwitcherCard.module.css';
import BentoCard from './BentoCard';

const LanguageSwitcherCard = () => {
  return (
    <BentoCard className={styles.languageCard}> {/* Usa su propia clase aquí */}
      <div className={styles.content}>
        <span className={styles.mainLang}>ES</span>
        <span className={styles.subLang}>EN ES</span>
      </div>
    </BentoCard>
  );
};

export default LanguageSwitcherCard;