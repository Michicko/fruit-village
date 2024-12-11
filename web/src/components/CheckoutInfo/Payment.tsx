import styles from "./CheckoutInfos.module.css";
import Apple from "../../assets/icons/apple.svg?react";
import Google from "../../assets/icons/google.svg?react";
import { useRef, useState } from "react";

export default function Payment() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  return (
    <div className={styles.payment}>
      <div className={styles["card-info-box"]}>
      
      </div>
      <div className={styles.merchants}>
        <button
          className={styles.merchant}
          type="button"
          data-merchant="apple pay"
        >
          <Apple className="icon sm path-filled light" /> Pay
        </button>
        <button
          className={styles.merchant}
          type="button"
          data-merchant="google pay"
        >
          <Google className="icon sm" /> Pay
        </button>
        <button
          className={styles.merchant}
          type="button"
          data-merchant="paypal"
        >
          PayPal
        </button>
      </div>
    </div>
  );
}
