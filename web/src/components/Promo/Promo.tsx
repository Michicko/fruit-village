import styles from "./Promo.module.css";
import Calendar from "../../assets/icons/calendar.svg?react";
import Button from "../Button/Button";

export default function Promo() {
  return (
    <div className={styles.promo}>
      <h2 className={styles['promo-heading']}>
        Every 2 days we supply <span>exotic fruits</span>
      </h2>
      <p className={styles["promo-lead"]}>
        Delivery every day <Calendar className={`${styles.icon} icon`} />
      </p>
      <img
        src="/images/delivery-guy.png"
        alt="delivery guy with packages"
        className={styles["promo-img"]}
      />
      <Button
        text="Choose fruit"
        link="/sale?category='fruit+box"
        hoveredBg="#cfebfb"
        hoveredColor="#0d6494"
        color="#0d6494"
        bg="#fcfff9"
      />
    </div>
  );
}
