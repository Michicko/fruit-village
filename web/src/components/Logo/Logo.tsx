import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

interface LogoProps {
  showTextSmallScreen: boolean;
}

export default function Logo({ showTextSmallScreen }: LogoProps) {
  return (
    <Link
      to={"/"}
      className={`${styles.logo} ${
        showTextSmallScreen ? styles["show-text"] : ""
      }`}
    >
      <img
        src="/logo.png"
        alt="fruit village logo"
        className={styles["logo-img"]}
      />
      <p className={styles['logo-text']}>FruitVillage</p>
    </Link>
  );
}
