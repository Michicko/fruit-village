import Liked from "../../assets/icons/like-filled.svg?react";
import Like from "../../assets/icons/like.svg?react";
import { ProductProps } from "../../constants";

type LikeButtonProps = {
  product: ProductProps;
};

export default function LikeButton({ product }: LikeButtonProps) {
  const user = {
    name: "John Doe",
    wishList: ["2cdy57h72782u289uj9"],
  };

  return (
    <button
      className={
        user.wishList.includes(product.id) ? "like-btn liked" : "like-btn"
      }
    >
      <Like className="like-btn__icon" />
      <Liked className="like-btn__icon" />
    </button>
  );
}
