import Main from "../components/Main";
import styles from "../styles/Home.module.css";
import Head from "../components/Head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <Main />
    </div>
  );
}
