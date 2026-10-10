// src/components/ui/DescaCvCard.jsx
import React from "react";
import styles from "../../styles/modules/DescaCvCard.module.css";
import { Download } from 'lucide-react';

const DescaCvCard = () => {
  return (
    <a
      href="/CV_Patricio_Calderon_dev.pdf"
      download="CV_Patricio_Calderon_dev.pdf"
      className={`${styles.cvCard} ${styles.flipContainer}`}
    >
      <div className={styles.flipper}>
        {/* Cara Frontal */}
        <div className={styles.front}>
          <h3 className={styles.title}>Descargar CV</h3>
          <Download size={28} className={styles.icon || 'text-indigo-400'} />
          <p className={styles.description}>
            Haz clic para obtener mi Currículum.
          </p>
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
