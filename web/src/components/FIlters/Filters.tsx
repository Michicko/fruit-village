import Categories from "./Categories";
import styles from "./Filters.module.css";

interface FiltersProps {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filters({
  categories,
  currentCategory,
  setCurrentCategory,
}: FiltersProps) {
    
  return (
    <aside className={`${styles.filters}`}>
      <div className={styles["filters-header"]}></div>
      <div className={styles["filters-content"]}>
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </div>
      <div className={styles["filters-footer"]}></div>
    </aside>
  );
}
