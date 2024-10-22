import styles from "./Filters.module.css";
import catalogCategoryStyles from "../CatalogMenu/CatalogDialog.module.css";
import Grid from "../../assets/icons/grid-4.svg?react";
import FiltersDropdown from "./FiltersDropdown";

interface CategoriesProps {
  categories: string[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function Categories({
  categories,
  currentCategory,
  setCurrentCategory,
}: CategoriesProps) {

  const selectCategory = (
    e: React.MouseEvent<HTMLButtonElement | undefined>
  ) => {
    const target = e.target as HTMLButtonElement;
    if (target && target.textContent) {
      setCurrentCategory(target.textContent.toLowerCase());
    }
  };

  return (
    <FiltersDropdown showBtn={true} name="Categories">
      <div className={styles.list}>
        {categories.map((category, i) => {
          return (
            <button
              key={i}
              className={`${catalogCategoryStyles["catalog-link"]} ${
                category === "all goods"
                  ? catalogCategoryStyles["with-icon"]
                  : ""
              } ${
                currentCategory === category.toLowerCase()
                  ? catalogCategoryStyles.active
                  : ""
              }`}
              onClick={selectCategory}
            >
              {category === "all goods" && (
                <Grid className={`${catalogCategoryStyles.icon} icon sm`} />
              )}
              {category}
            </button>
          );
        })}
      </div>
    </FiltersDropdown>
  );
}
