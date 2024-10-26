import { useEffect, useState } from "react";
import Price from "../Price/Price";
import styles from "./Cart.module.css";
import Counter from "../Counter/Counter";
import Close from "../../assets/icons/close.svg?react";
import { ProductProps } from "../../constants";

interface CartItemPropsTypes {
  item: {
    quantity: number;
    product: ProductProps;
  };
  removeItem: (id: string) => void;
}

export default function CartItem({ item, removeItem }: CartItemPropsTypes) {
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
    <div className={styles["cart-item"]}>
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
      <button onClick={() => removeItem(item.product.id)}>
        <Close className="icon stroke dark" />
      </button>
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
    </div>
  );
}
