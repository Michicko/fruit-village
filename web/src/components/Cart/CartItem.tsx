import { useEffect, useState } from "react";
import Price from "../Price/Price";
import styles from "./Cart.module.css";
import Counter from "../Counter/Counter";
import Close from "../../assets/icons/close.svg?react";
import { CartItemProps } from "../../constants";

interface CartItemPropsTypes {
  item: CartItemProps;
  removeItem?: (id: string) => void;
  showCounter?: boolean;
}

export default function CartItem({
  item,
  removeItem,
  showCounter,
}: CartItemPropsTypes) {
  const [quantity, setQuantity] = useState(item.quantity);

  const getMeasurement = (measurement: string): string => {
    if (measurement === "piece") {
      return "pcs";
    }
    return measurement;
  };

  useEffect(() => {
    item.quantity = quantity;
  }, [item, quantity]);

  return (
    <div
      className={`${styles["cart-item"]} ${
        !showCounter ? styles["no-counter"] : ""
      }`}
    >
      <img
        src={item.product.image}
        alt={item.product.name}
        className={styles.img}
      />
      <div>
        <h3 className={styles.name}>
          {item.product.name}{" "}
          <span className={styles.feint}>
            ({getMeasurement(item.product.measurement)})
          </span>
        </h3>
        <p className={styles.code}>product code: {item.product.code}</p>
      </div>
      {removeItem && (
        <button onClick={() => removeItem(item.product.id)}>
          <Close className="icon stroke dark" />
        </button>
      )}
      {showCounter ? (
        <>
          <Price
            discount={item.product.discount}
            price={item.product.price}
            size="md"
          />
          <div className={styles["item-quantity"]}>
            <Counter
              count={quantity}
              setCount={setQuantity}
              total={item.product.stock}
            />
            <Price
              discount={0}
              price={+(quantity * item.product.price).toFixed(2)}
              size="md"
            />
          </div>
        </>
      ) : (
        <div className={styles["item-qty"]}>
          <p>Qty: {item.quantity}</p>
          <Price
            discount={0}
            price={+(quantity * item.product.price).toFixed(2)}
            size="md"
          />
        </div>
      )}
    </div>
  );
}
