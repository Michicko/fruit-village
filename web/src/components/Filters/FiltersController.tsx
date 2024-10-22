import SortIcon from "../../assets/icons/sort.svg?react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import styles from "./Filters.module.css";
import Sort from "./Sort";
import { sortOptions } from "../../data";

interface FiltersControllerProps {
  setIsFiltersOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FiltersController({
  setIsFiltersOpened,
}: FiltersControllerProps) {
  return (
    <div className={styles["filters-controller"]}>
      <div className={styles["controllers-mobile"]}>
        <label
          htmlFor="sortBy"
          className={`${styles["controllers-btn"]} ${styles.label}`}
        >
          <div className={`${styles["label-box"]}`}>
            <SortIcon className="icon md path-filled green" />
            Sort by
          </div>
          <Sort id="sortBy" options={sortOptions} />
        </label>
        <button
          className={styles["controllers-btn"]}
          onClick={() => setIsFiltersOpened(true)}
        >
          <FilterIcon className="icon md stroke green" />
          Filter
        </button>
      </div>
      <div className={styles["controllers-desktop"]}></div>
    </div>
  );
}
