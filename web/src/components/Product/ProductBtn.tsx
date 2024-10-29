import Check from "../../assets/icons/check-circle.svg?react";
import { CartProducts } from "../../data";
import styles from "./Product.module.css";
import { ProductProps } from "../../constants";

interface ProductBtnPropsTypes {
  product: ProductProps;
}

export default function ProductBtn({ product }: ProductBtnPropsTypes) {
  const inCart = (id: string) => {
    const cardIds = CartProducts.map((el) => el.product.id);
    return cardIds.includes(id);
  };

  return (
    <button
      className={`${styles["product-btn"]} ${
        inCart(product.id) ? styles["in-cart"] : ""
      }`}
    >
      {inCart(product.id) && (
        <Check className={`${styles["check-icon"]} icon`} />
      )}
      {inCart(product.id) ? "Added" : "Add to Cart"}
    </button>
  );
}
