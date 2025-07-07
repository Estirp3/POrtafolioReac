import styles from "./DeveloperCard.module.css";
import blobStyles from "../assets/css/blob.module.css";
import auroraStyles from "../assets/css/aurora.module.css";
import miFoto from "../assets/img/prc.png";

const DeveloperCard = () => (
  <section className={styles.card}>
    <div className={blobStyles.blob1}></div>
    <div className={blobStyles.blob2}></div>
    <div className={blobStyles.blob3}></div>
    <div className={auroraStyles.auroraBg}></div>
    
    <div className={styles.imgWrapper}>
      <img src={miFoto} alt="Patricio Calderón" className={styles.avatar} />
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>Hola, Soy Patricio Calderón</h1>
      <p>Soy desarrollador backend  apasionado por construir sistemas robustos y escalables con Java y Node.js. Mi enfoque principal es crear código limpio y eficiente que resuelva problemas complejos con elegancia..</p>
    </div>
  </section>
);

export default DeveloperCard;
