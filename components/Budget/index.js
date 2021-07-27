import React from "react";
import Image from "next/image";
import BudgetImg from "../../public/assets/fotoAgua-min.png";
import styles from "./Budget.module.scss";
import { Link } from "react-scroll";

function Budget() {
  return (
    <>
      <div className={styles.wrapper} id="budget">
        <Image
          src={BudgetImg}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="pileta"
          opacity={0.4}
        />
        <div className={styles.background}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>PRESUPUESTO SIN CARGO</h2>
            <p className={styles.text}>
              Solicitá un relevamiento sin costo, contactanos y nuestro personal
              coordina una cita para presentarse y brindarte un presupuesto
              acorde al tipo de servicio y necesidades, evaluamos las
              instalaciones, dimensiones, el equipo de filtrado y el material de
              la piscina.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Budget;
