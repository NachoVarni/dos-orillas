import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Explain from "../Explain";
import Work from "../Work";
import Budget from "../Budget";
import Contact from "../Contact";
import ContactButton from "../ContactButton";
import styles from "./Main.module.scss";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.break}></div>
      <About />
      <div className={styles.break}></div>
      <Explain />
      <div className={`${styles.break} ${styles.lightBlue}`}></div>
      <Work />
      <div className={styles.break}></div>
      <Budget />
      <div className={styles.budget}></div>
      <Contact />
      <ContactButton />
    </div>
  );
}

export default Main;
