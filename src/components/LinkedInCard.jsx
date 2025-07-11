// src/components/LinkedInCard.jsx
import React from 'react';
import BentoCard from './BentoCard';
import styles from './LinkedInCard.module.css';

const LinkedInCard = () => {
    return (
        <BentoCard className={styles.linkedinCard}>
            <a
                href="https://www.linkedin.com/in/patricio-calder%C3%B3n-rojas-b22316b1/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <span className={styles.logoText}>in</span>
            </a>
        </BentoCard>
    );
};

export default LinkedInCard;