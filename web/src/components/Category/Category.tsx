import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

interface CategoryProps {
  name: string;
  url: string;
  image?: string;
}

export default function Category({ name, url, image }: CategoryProps) {
  return (
    <div
      className={`${styles.category} ${
        name === "Show all categories" ? styles["fixed-footer"] : ""
      }`}
    >
      <img src={image} alt={name} className={styles["category-img"]} />
      {name !== "Show all categories" && <h2 className={styles['category-title']}>{name}</h2>}
      <div className={styles["category-footer"]}>
        <Link to={url} className={styles["category-link"]}>
          {name}
          <ArrowRight className={`${styles.icon} icon md`} />
        </Link>
      </div>
    </div>
  );
}
