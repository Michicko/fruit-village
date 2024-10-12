import styles from "./CatalogButton.module.css";
import Dots from "../../assets/icons/dots.svg?react";

interface CatalogButtonProps {
  fullWidth: boolean;
}

export default function CatalogButton({ fullWidth }: CatalogButtonProps) {
  return (
    <button
      className={`${styles["catalog-btn"]} ${fullWidth ? styles.full : ""}`}
    >
      <Dots className={`${styles.icon} icon`} />
      Catalog
    </button>
  );
}
