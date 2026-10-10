import React from "react";
import styles from "../../styles/modules/DeveloperCard.module.css";
import miFoto from "../../assets/img/prc.png";

const DeveloperCard = () => (
  <section className={styles.card}>
    <div className={styles.imgWrapper}>
      <img src={miFoto} alt="Patricio Calderón" className={styles.avatar} />
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>Hola, Soy Patricio Calderón</h1>
      <p>Desarrollador Fullstack, DevOps & AI Solutions apasionado por construir sistemas robustos, escalables y arquitecturas modernas.</p>
    </div>
  </section>
);

export default DeveloperCard;
