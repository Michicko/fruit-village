import { useEffect, useRef } from "react";
import Checkmark from "../../assets/icons/checkmark.svg?react";
import styles from "./CheckoutInfos.module.css";

interface CheckoutInfoPropsTypes {
  title: string;
  children: React.ReactNode;
  currentIndex: number;
  index: number;
}

export default function CheckoutInfo({
  title,
  children,
  currentIndex,
  index,
}: CheckoutInfoPropsTypes) {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (main) {
      if (currentIndex === index) {
        main.setAttribute('open', '')
      }
    }
  }, [currentIndex, index]);

  return (
    <div className={styles["checkout-info"]}>
      <div className={styles["checkout-info-top"]}>
        <h3>{title}</h3>
        <Checkmark className={`${styles.icon} icon sm`} />
      </div>
      <div className={styles["checkout-info-main"]} ref={mainRef}>
        {children}
      </div>
    </div>
  );
}
