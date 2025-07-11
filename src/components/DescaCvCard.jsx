// src/components/DescaCvCard.jsx

import React from 'react';
import BentoCard from './BentoCard';
import styles from './DescaCvCard.module.css';
// Importa tu icono SVG local. Asegúrate de que la ruta sea correcta.
import DownloadIcon from '../assets/img/descarga.svg';

const DescaCvCard = () => {
    const handleDownload = () => {
        alert("Iniciando descarga del CV...");
    };

    return (
        <BentoCard className={`${styles.cvCard} ${styles.flipContainer}`} onClick={handleDownload}>
            <div className={styles.flipper}>

                {/* Cara Frontal: Diseño original de la tarjeta */}
                <div className={styles.front}>

                    {/* 1. Título arriba */}
                    <h3 className={styles.title}>Descargar CV</h3>

                    {/* 2. Icono centralizado */}
                    <img src={DownloadIcon} alt="Download CV Icon" className={styles.icon} />

                    {/* 3. Descripción abajo */}
                    <p className={styles.description}>Haz clic para obtener mi Currículum.</p>
                </div>

                {/* Cara Trasera: La leyenda que aparece al hacer el flip */}
                <div className={styles.back}>
                    <p className={styles.legend}>Descargar CV de Patricio Calderón</p>
                </div>
            </div>
        </BentoCard>
    );
};

export default DescaCvCard;