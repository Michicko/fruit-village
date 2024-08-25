import Liked from "../../assets/icons/like-filled.svg?react";
import Like from "../../assets/icons/like.svg?react";

type LikeButtonProps = {
  isLiked: boolean;
};

export default function LikeButton({ isLiked }: LikeButtonProps) {
  return (
    <button className={isLiked ? "like-btn liked" : "like-btn"}>
      <Like className="like-btn__icon" />
      <Liked className="like-btn__icon" />
    </button>
  );
}
