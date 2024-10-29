import styles from "./Price.module.css";

interface PricePropsTypes {
  discount?: number;
  price: number;
  size: "sm" | "md" | "lg" | "xl";
}

export default function Price({ discount, price, size }: PricePropsTypes) {
  return (
    <>
      {discount && discount > 0 ? (
        <div className={`${styles["discount-prices"]} ${styles[size]}`}>
          <h3 className={styles["price"]}>
            ${(price - (10 / 100) * price).toFixed(2)}
          </h3>
          <h3 className={styles["price-old"]}>${price}</h3>
        </div>
      ) : (
        <h3
          className={`${styles["price"]} ${styles[size]} ${styles["no-discount"]}`}
        >
          ${price}
        </h3>
      )}
    </>
  );
}
