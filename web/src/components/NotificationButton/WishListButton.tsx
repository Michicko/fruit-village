import { Link } from "react-router-dom";
import Heart from "../../assets/icons/heart.svg?react";
import styles from "./NotificationButton.module.css";

export default function WishListButton() {
  return (
    <Link className={`${styles["notification-btn"]} ${styles.wishList}`} to={"/wishlist"}>
      <Heart className={`${styles.icon} icon md`} />
      <div>
        <span>6</span>
      </div>
    </Link>
  );
}
