import { Link } from "react-scroll";
import styles from "./ContactButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactButton() {
  return (
    <>
      <a
        href="https://wa.me/541164091233"
        className={styles.whatsappFloat}
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
}
