import styles from "./SearchInput.module.css";
import Search from "../../assets/icons/search.svg?react";

export default function SearchInput() {
  return (
    <div className={styles["search-input"]}>
      <Search className={`${styles.icon} icon lg`} />
      <input type="search" name="search" id="search" placeholder="Search" />
    </div>
  );
}
