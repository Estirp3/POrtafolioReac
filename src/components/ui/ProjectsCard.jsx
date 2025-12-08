// src/components/ProjectsCard.jsx
import React from 'react';
import BentoCard from './BentoCard';
import styles from '../../styles/modules/ProjectsCard.module.css';

const ProjectsCard = () => {
    return (
        <BentoCard className={styles.projectsCard}>
            <div className={styles.content}>
                <h3 className={styles.title}>Proyectos</h3>
                <p className={styles.description}>Descubre mi portafolio técnico.</p>
            </div>
        </BentoCard>
    );
};

export default ProjectsCard;