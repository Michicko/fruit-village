import { useCallback, useRef, useState } from "react";
import HeartOutline from "../../assets/icons/heart-outline.svg?react";
import styles from "./Favorite.module.css";
import { wishList } from "../../data";
import { ProductProps } from "../../constants";

interface FavoritePropsTypes {
  product: ProductProps;
  size: "sm" | "md" | "lg" | "xl";
}

export default function Favorite({ product, size }: FavoritePropsTypes) {
  const checkRef = useRef<HTMLInputElement | null>(null);
  const [dataWishList, setDataWishList] = useState(wishList);

  const isFavorited = useCallback(
    (id: string) => {
      const wishListIds = dataWishList.map((wish) => wish.id);
      return wishListIds.includes(id);
    },
    [dataWishList]
  );

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
    <label htmlFor={product.slug} className={styles["favorite-label"]}>
      <HeartOutline
        className={`${styles["favorite-icon"]} ${
          isFavorited(product.id) ? styles["filled"] : styles["outline"]
        } icon ${size}`}
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
  );
}
