import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo" />
      <p>
        <span className={styles.firstLogoPart}>to</span>
        <span className={styles.secondLogoPart}>do</span>
      </p>
    </header>
  );
};
