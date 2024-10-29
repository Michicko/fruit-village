import Like from "../../assets/icons/like.svg?react";
import DisLike from "../../assets/icons/dislike.svg?react";
import styles from "./LikeCounter.module.css";

interface LikeCounterPropsTypes {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  type: "likes" | "dislikes";
}

export default function LikeCounter({
  count,
  setCount,
  type,
}: LikeCounterPropsTypes) {
  return (
    <button
      className={styles["likes-counter"]}
      onClick={() => setCount((prev) => prev + 1)}
    >
      {type === "likes" ? (
        <Like className={`${styles.icon} icon path-filled green`} />
      ) : (
        <DisLike className={`${styles.icon} icon path-filled red`} />
      )}{" "}
      <p>{count}</p>
    </button>
  );
}
