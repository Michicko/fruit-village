import { ProductProps } from "../../constants";
import Button from "../Button/Button";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./FruitBox.module.css";

interface FruitboxProps {
  fruitbox: ProductProps;
  showAll: boolean;
}

export default function FruitBox({ fruitbox, showAll }: FruitboxProps) {
  return (
    <div className={styles.fruitbox}>
      <div className={styles.left}>
        <img
          src={fruitbox.image}
          alt={fruitbox.name}
          className={styles["fruitbox-img"]}
        />
      </div>
      <div className={styles.right}>
        <h3 className={styles["fruitbox-name"]}>{fruitbox.name}</h3>
        <p className={styles["fruitbox-size"]}>
          {fruitbox.size} {fruitbox.measurement}
        </p>
        <p className={styles["fruitbox-desc"]}>{fruitbox.description}</p>
        <h3 className={styles["fruitbox-price"]}>${fruitbox.price}</h3>
        <div className={styles["btn-box"]}>
          <Button
            text="Buy fruit box"
            bg="#fcfff9"
            color="#386d15"
            hoveredBg="#c6eeca"
            hoveredColor="#386d15"
            link={`/sale/${fruitbox.slug}`}
          />
          {showAll && (
            <CustomLink
              url={'/sale?category=fruit+box"'}
              text="Show all boxes"
              color="light"
            />
          )}
        </div>
      </div>
    </div>
  );
}
