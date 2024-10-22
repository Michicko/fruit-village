import Categories from "./Categories";
import styles from "./Filters.module.css";
import Price from "./Price";
import CloseIcon from "../../assets/icons/close.svg?react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import Taste from "./Taste";
import ManufacturerCountry from "./ManufacturerCountry";
import Weight from "./Weight";
import BestBefore from "./BestBefore";

interface FiltersProps {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  isFiltersOpened: boolean;
  setIsFiltersOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filters({
  categories,
  currentCategory,
  setCurrentCategory,
  isFiltersOpened,
  setIsFiltersOpened,
}: FiltersProps) {
  const handlePriceOnChange = ({ min, max }: { min: number; max: number }) => {
    // console.log(`min = ${min}, max = ${max}`);
  };

  return (
    <aside
      className={`${styles.filters} ${isFiltersOpened ? styles.isOpened : ""}`}
    >
      <div className={styles["filters-header"]}>
        <div>
          <FilterIcon className="icon md stroke" />
          <span>Filter</span>
        </div>
        <button onClick={() => setIsFiltersOpened(false)}>
          <CloseIcon className="icon md stroke" />
        </button>
      </div>
      <div className={styles["filters-content"]}>
        <div className={styles["filters-content-list"]}>
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <Price min={30} max={200} onChange={handlePriceOnChange} />
        <Taste />
        <ManufacturerCountry />
        <Weight />
        <BestBefore />
        </div>
      </div>
      <div className={styles["filters-footer"]}></div>
    </aside>
  );
}
