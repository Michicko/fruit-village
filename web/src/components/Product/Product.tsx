import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { ProductProps } from "../../constants";
import Price from "../Price/Price";
import Bin from "../../assets/icons/bin.svg?react";
import Favorite from "../Favorite/Favorite";
import ProductBtn from "./ProductBtn";

interface ProductPropTypes {
  product: ProductProps;
  showDeleteBtn: boolean;
  deleteWish?: (id: string) => void;
}

export default function Product({
  product,
  showDeleteBtn,
  deleteWish,
}: ProductPropTypes) {

  return (
    <div className={styles.product}>
      {product.discount > 0 && (
        <div className={styles["discount-box"]}>
          <p className={styles["discount"]}>-{product.discount}%</p>
        </div>
      )}
      {showDeleteBtn && deleteWish && (
        <button
          className={styles["del-btn"]}
          onClick={() => deleteWish(product.id)}
        >
          <Bin className="icon md path-filled red" />
        </button>
      )}
      <img
        src={product.image}
        alt={product.name}
        className={styles["product-img"]}
      />
      <div className={styles["product-body"]}>
        <Link className={styles["product-name"]} to={`/sale/${product.slug}`}>
          {product.name}
        </Link>
        <p className={styles["product-measurement"]}>
          price for 1 {product.measurement}
        </p>
        <p
          className={`${styles["product-stock"]} ${
            product.stock > 0 ? styles.available : styles.unavailable
          }`}
        >
          {product.stock > 0 ? "in stock" : "by order"}
        </p>
        <div className={styles["price-box"]}>
          <Price
            discount={product.discount}
            price={product.price}
            size={"lg"}
          />
          <Favorite product={product} size="md" />
        </div>
        <ProductBtn product={product} />
      </div>
    </div>
  );
}
