import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "../../public/assets/logo-dos-orillas.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Image src={Logo} alt="logo" />
      </div>

      <ul className={styles.list}>
        <Link to="about" spy={true} smooth={true}>
          <li className={styles.item}>CONOCENOS</li>
        </Link>
        <Link to="explain" spy={true} smooth={true}>
          <li className={styles.item}>QUE HACEMOS</li>
        </Link>
        <Link to="work" spy={true} smooth={true}>
          <li className={styles.item}>NUESTRO TRABAJO</li>
        </Link>
        <Link to="budget" spy={true} smooth={true}>
          <li className={styles.item} to="budget">
            PRESUPUESTA
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
