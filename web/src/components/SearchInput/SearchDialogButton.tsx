import styles from "./SearchInput.module.css";
import Search from "../../assets/icons/search.svg?react";

export default function SearchDialogButton() {
  return (
    <button className={styles["dialog-btn"]}>
      <Search className={`${styles.icon} icon lg`} />
    </button>
  );
}
