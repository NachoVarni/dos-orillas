import { Link } from "react-scroll";
import styles from "./ContactButton.module.scss";

export default function ContactButton() {
  return (
    <Link to="contactMenu" spy={true} smooth={true}>
      <span className={styles.contactButton}>CONTACTANOS!</span>
    </Link>
  );
}
