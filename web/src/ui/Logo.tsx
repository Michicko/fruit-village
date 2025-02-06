import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./ui.module.css";

const Logo = ({ hideTextOnMobile }: { hideTextOnMobile: boolean }) => {
  return (
    <Link
      to={"/"}
      className={clsx(styles.logo, {
        [styles["hide-text-mobile"]]: hideTextOnMobile,
      })}
    >
      <img src="/logo.png" alt="Fruit village logo" />
      <span>FruitVillage</span>
    </Link>
  );
};

export default Logo;
