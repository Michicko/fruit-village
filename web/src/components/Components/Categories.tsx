import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

type Category = {
  id: number;
  category: string;
  link: string;
  image: string;
};

type CategoriesProps = {
  categories: Category[];
};

export default function Categories({ categories }: CategoriesProps) {
  const cate = [
    ...categories,
    {
      id: 6,
      category: "all",
      link: "/sale",
      image: "all-category.jpg",
    },
  ];
  
  return (
    <div className="category__list">
      {cate.map((category) => {
        return (
          <div className="category" key={uuid()}>
            {category.id < 6 && (
              <h3 className="category__name">{category.category}</h3>
            )}
            <img
              src={`/assets/images/${category.image}`}
              alt={category.category}
              className="category__img"
            />
            <Link
              to={category.link}
              className={
                category.id === 6
                  ? "category__link category__link--fixed link--light"
                  : "category__link link link--light"
              }
            >
              {category.id === 6 ? "show all categories" : "show more"}{" "}
              <ArrowRight className="link__icon" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
