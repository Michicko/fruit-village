import styles from "./CatalogButton.module.css";
import Dots from "../../assets/icons/dots.svg?react";

interface CatalogButtonProps {
  fullWidth: boolean;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CatalogButton({
  fullWidth,
  onClickHandler,
}: CatalogButtonProps) {
  return (
    <button
      className={`${styles["catalog-btn"]} ${fullWidth ? styles.full : ""}`}
      onClick={onClickHandler}
    >
      <Dots className={`${styles.icon} icon`} />
      Catalog
    </button>
  );
}
