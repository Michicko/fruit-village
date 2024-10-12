import styles from "./NotificationButton.module.css";
import Bag from "../../assets/icons/bag.svg?react";

export default function CartButton() {
  return (
    <button className={`${styles["notification-btn"]} ${styles.cart}`}>
      <Bag className={`${styles.icon} icon md`} />
      <div>
        <span>5</span>
      </div>
    </button>
  );
}
