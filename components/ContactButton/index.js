import { Link } from "react-scroll";
import styles from "./ContactButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactButton() {
  return (
    <>
      <a href="https://wa.me/541138385415" className={styles.whatsappFloat}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
}
