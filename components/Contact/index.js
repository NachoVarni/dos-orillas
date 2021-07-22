import styles from "./Contact.module.scss";

function Contact() {
  return (
    <>
      <div className={styles.scroll} id="contactMenu"></div>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>DOS ORILLAS PISCINAS</h4>
        <p className={styles.text}>MANTENIMIENTO Y LIMPIEZA DE PISCINAS</p>
        <span className={styles.number}>011 3838-5415</span>
        <span className={styles.email}>guillermo@dosorillaspiscinas.com</span>
      </div>
    </>
  );
}

export default Contact;
