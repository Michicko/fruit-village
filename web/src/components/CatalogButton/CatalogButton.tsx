import styles from "./CatalogButton.module.css";
import Dots from "../../assets/icons/dots.svg?react";

export default function CatalogButton() {
  return (
    <button className={styles["catalog-btn"]}>
      <Dots className={`${styles.icon} icon`} />
      Catalog
    </button>
  );
}

