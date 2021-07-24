import React from "react";
import styles from "./Explain.module.scss";
import Image from "next/image";
import house from "../../public/assets/house.png";
import building from "../../public/assets/building.png";
import bug from "../../public/assets/bug.png";
import design from "../../public/assets/design.png";

function Explain() {
  return (
    <>
      <div className={styles.main} id="explain">
        <h3 className={styles.title}>QUE HACEMOS?</h3>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src={house}
                alt="house"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <h4 className={styles.cardTitle}>RESIDENCIAL</h4>
            <p className={styles.cardText}>
              Mantenimiento de piscinas en casas particulares
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src={building}
                alt="building"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h4 className={styles.cardTitle}>COMERCIAL</h4>
            <p className={styles.cardText}>
              Mantenimiento de piscinas en consorcios, countrys, quintas,
              clubes, hoteles y embajadas
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image src={bug} alt="bug" layout="fill" objectFit="contain" />
            </div>
            <h4 className={styles.cardTitle}>FUMIGACION</h4>
            <p className={styles.cardText}>Servicio integral de fumigación</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src={design}
                alt="house"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h4 className={styles.cardTitle}>DISEÑO</h4>
            <p className={styles.cardText}>
              Construccion y remodelación de piscinas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explain;
