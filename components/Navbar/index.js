import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "../../public/assets/logo-dos-orillas.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { clickOutside } from "../../hooks/clickOutside";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current || !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function Navbar() {
  const [hamMenu, setHamMenu] = useState(false);

  let domNode = useClickOutside(() => {
    setHamMenu(false);
  });

  return (
    <div className={styles.navbar} ref={domNode}>
      <div className={styles.logoWrapper}>
        <Link to="home" spy={true} smooth={true}>
          <Image src={Logo} alt="logo" />
        </Link>
      </div>

      <ul className={styles.list}>
        <Link
          to="about"
          offset={-110}
          spy={true}
          smooth={true}
          activeClass={styles.active}
        >
          <li className={styles.item}>CONOCENOS</li>
        </Link>
        <Link
          to="explain"
          offset={-110}
          spy={true}
          smooth={true}
          activeClass={styles.active}
        >
          <li className={styles.item}>QUE HACEMOS</li>
        </Link>
        <Link
          to="work"
          offset={-110}
          spy={true}
          smooth={true}
          activeClass={styles.active}
        >
          <li className={styles.item}>NUESTRO TRABAJO</li>
        </Link>
        <Link
          to="budget"
          offset={-110}
          spy={true}
          smooth={true}
          activeClass={styles.active}
        >
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
          <Link
            to="about"
            offset={-110}
            spy={true}
            smooth={true}
            activeClass={styles.active}
          >
            <li className={styles.hamItem}>CONOCENOS</li>
          </Link>
          <Link
            to="explain"
            offset={-110}
            spy={true}
            smooth={true}
            activeClass={styles.active}
          >
            <li className={styles.hamItem}>QUE HACEMOS</li>
          </Link>
          <Link
            to="work"
            offset={-110}
            spy={true}
            smooth={true}
            activeClass={styles.active}
          >
            <li className={styles.hamItem}>NUESTRO TRABAJO</li>
          </Link>
          <Link
            to="budget"
            offset={-110}
            spy={true}
            smooth={true}
            activeClass={styles.active}
          >
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
