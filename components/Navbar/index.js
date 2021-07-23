import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "../../public/assets/logo-dos-orillas.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Link to="home" spy={true} smooth={true}>
          <Image src={Logo} alt="logo" />
        </Link>
      </div>

      <ul className={styles.list}>
        <Link to="about" spy={true} smooth={true} activeClass={styles.active}>
          <li className={styles.item}>CONOCENOS</li>
        </Link>
        <Link to="explain" spy={true} smooth={true} activeClass={styles.active}>
          <li className={styles.item}>QUE HACEMOS</li>
        </Link>
        <Link to="work" spy={true} smooth={true} activeClass={styles.active}>
          <li className={styles.item}>NUESTRO TRABAJO</li>
        </Link>
        <Link to="budget" spy={true} smooth={true} activeClass={styles.active}>
          <li className={styles.item} to="budget">
            PRESUPUESTA
          </li>
        </Link>
      </ul>
      <div
        className={styles.hamburguerMenu}
        onClick={() => setHamMenu((prevState) => !prevState)}
      >
        <FontAwesomeIcon icon={faBars} className={styles.hamburguer} />
      </div>
      {hamMenu && (
        <ul className={styles.hamList}>
          <Link to="about" spy={true} smooth={true} activeClass={true}>
            <li className={styles.hamItem}>CONOCENOS</li>
          </Link>
          <Link to="explain" spy={true} smooth={true} activeClass={true}>
            <li className={styles.hamItem}>QUE HACEMOS</li>
          </Link>
          <Link to="work" spy={true} smooth={true} activeClass={true}>
            <li className={styles.hamItem}>NUESTRO TRABAJO</li>
          </Link>
          <Link to="budget" spy={true} smooth={true} activeClass={true}>
            <li className={styles.hamItem} to="budget">
              PRESUPUESTA
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
