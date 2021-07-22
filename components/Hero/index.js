import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/main-image.png";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={HeroImg}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="pileta"
      />
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>MANTENIMIENTO INTEGRAL DE PISCINAS</h2>
      </div>
    </div>
  );
}

export default Hero;
