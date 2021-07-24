import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import AboutImg from "../../public/assets/about-img.png";

function About() {
  return (
    <>
      <div className={styles.wrapper} id="about">
        <div className={styles.boxOne}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>CONOCENOS!</h2>
            <p className={styles.firstP}>
              Somos una empresa de servicios dedicada al mantenimiento integral
              de piscinas en <strong>Capital Federal y Zona Norte</strong> desde
              hace más de 10 años.
            </p>
            <p className={styles.secondP}>
              ​El tratamiento inadecuado del agua tiene efectos desagradables,
              provocando la irritación de ojos y piel y hasta causar
              enfermedades gastrointestinales. Por esto, al igual que la
              tecnología y metodología de trabajo en constante evolución y
              mejora
            </p>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <div className={styles.imgWrapper}>
            <Image
              src={AboutImg}
              alt="cleaned pool"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
