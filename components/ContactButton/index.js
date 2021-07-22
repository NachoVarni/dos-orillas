import { Link } from "react-scroll";
import styles from "./ContactButton.module.scss";

export default function ContactButton() {
  return (
    <span className={styles.contactButton}>
      <Link to="contactMenu" spy={true} smooth={true}>
        CONTACTANOS!
      </Link>
    </span>
  );
}
