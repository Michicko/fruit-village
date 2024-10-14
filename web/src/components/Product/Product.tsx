import styles from "./Product.module.css";
import HeartOutline from "../../assets/icons/heart-outline.svg?react";
import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Check from "../../assets/icons/check-circle.svg?react";
import { CartProducts, wishList } from "../../data";
import { ProductProps } from "../../constants";

interface ProductPropTypes {
  product: ProductProps;
}

export default function Product({ product }: ProductPropTypes) {
  const checkRef = useRef<HTMLInputElement | null>(null);
  const [dataWishList, setDataWishList] = useState(wishList);

  const isFavorited = useCallback(
    (id: string) => {
      const wishListIds = dataWishList.map((wish) => wish.id);
      return wishListIds.includes(id);
    },
    [dataWishList]
  );

  const inCart = (id: string) => {
    const cardIds = CartProducts.map((el) => el.id);
    return cardIds.includes(id);
  };

  const handleFavoriteCheck = () => {
    const checky = checkRef.current;

    if (checky) {
      if (isFavorited(product.id)) {
        checky.removeAttribute("checked");
        const wishes = dataWishList.filter((el) => el.id !== product.id);
        setDataWishList(wishes);
      } else {
        checky.setAttribute("checked", "checked");
        setDataWishList([...dataWishList, product]);
      }
    }
  };

  return (
    <div className={styles.product}>
      {product.discount > 0 && (
        <div className={styles["discount-box"]}>
          <p className={styles["discount"]}>-{product.discount}%</p>
        </div>
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
          {product.discount > 0 ? (
            <div className={styles["discount-prices"]}>
              <h3 className={styles["product-price"]}>
                ${(product.price - (10 / 100) * product.price).toFixed(2)}
              </h3>
              <h3 className={styles["product-price-old"]}>${product.price}</h3>
            </div>
          ) : (
            <h3 className={styles["product-price"]}>${product.price}</h3>
          )}
          <label htmlFor={product.slug} className={styles["favorite-label"]}>
            <HeartOutline
              className={`${styles["favorite-icon"]} ${
                isFavorited(product.id) ? styles["filled"] : styles["outline"]
              } icon`}
            />
            <input
              ref={checkRef}
              type="checkbox"
              name="isFavorite"
              id={product.slug}
              checked={isFavorited(product.id) ? true : false}
              className={styles.checky}
              onChange={handleFavoriteCheck}
            />
          </label>
        </div>
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
      </div>
    </div>
  );
}
