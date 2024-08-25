import { categories } from "../../data";
import { v4 as uuid } from "uuid";
import Grid from "../../assets/icons/grid.svg?react";

export default function Categories() {
  const cate = [
    {
      id: 0,
      category: "all",
      link: "/sale",
      image: "all-category.jpg",
    },
    ...categories,
  ];
  return (
    <div className="filter__list">
      {cate.map((category) => {
        return (
          <button
            data-category={category.category}
            className="category-filter"
            key={uuid()}
          >
            {category.category === "all" ? (
              <>
                <Grid className="icon" />
                <span>All goods</span>
              </>
            ) : (
              category.category
            )}
          </button>
        );
      })}
    </div>
  );
}
