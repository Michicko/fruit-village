import styles from "./NotificationButton.module.css";
import Bag from "../../assets/icons/bag.svg?react";

interface CartButtonPropsTypes {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartButton({ setShowCart }: CartButtonPropsTypes) {
  return (
    <button
      className={`${styles["notification-btn"]} ${styles.cart}`}
      onClick={() => setShowCart(true)}
    >
      <Bag className={`${styles.icon} icon md`} />
      <div>
        <span>5</span>
      </div>
    </button>
  );
}
