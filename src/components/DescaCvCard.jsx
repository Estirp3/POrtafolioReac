// src/components/DescaCvCard.jsx

import React from 'react';
import BentoCard from './BentoCard';
import styles from './DescaCvCard.module.css';
import DownloadIcon from '../assets/img/descarga.svg'; // Asegúrate de que el path sea correcto

// Eliminamos la función handleDownload, ya no la necesitamos

const DescaCvCard = () => {
  return (
    // CAMBIO CLAVE: Usamos una etiqueta <a> como contenedor.
    // href apunta al archivo en la carpeta public.
    // download indica al navegador que descargue el archivo en lugar de navegar a él.
    <a 
      href="/Curriculum_Patricio.pdf" // Asegúrate que el nombre de tu archivo CV sea correcto
      download="Curriculum_PatricioCalderon.pdf" // Nombre con el que se descargará el archivo
      className={`${styles.cvCard} ${styles.flipContainer}`}
    >
      
      <div className={styles.flipper}>
        
        {/* Cara Frontal */}
        <div className={styles.front}>
          <h3 className={styles.title}>Descargar CV</h3>
          <img src={DownloadIcon} alt="Download CV Icon" className={styles.icon} />
          <p className={styles.description}>Haz clic para obtener mi Currículum.</p>
        </div>
        
        {/* Cara Trasera */}
        <div className={styles.back}>
          <p className={styles.legend}>Descargar CV de Patricio Calderón</p>
        </div>
      </div>
      
    </a>
  );
};

export default DescaCvCard;