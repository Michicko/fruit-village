import { Link } from "react-router-dom";
import { catalogue, links } from "../../data";
import Logo from "../Logo/Logo";
import Phone from "../Phone/Phone";
import styles from "./Footer.module.css";
import X from "../../assets/icons/x.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import Telegram from "../../assets/icons/telegram.svg?react";
import Visa from "../../assets/icons/visa.svg?react";
import Mastercard from "../../assets/icons/master-card.svg?react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <Logo showTextSmallScreen={true} />
        <Phone text="(805) 555-0011" color="light" showOnSmallScreen={true} />
        <Phone text="(802) 444-0022" color="light" showOnSmallScreen={true} />
      </div>
      <div className={styles["footer-links-box"]}>
        <div className={styles["footer-links"]}>
          <h5 className={styles["footer-heading"]}>Catalog</h5>
          {catalogue.map((el) => {
            return (
              <Link className={styles["footer-link"]} to={el.url} key={el.id}>
                {el.name}
              </Link>
            );
          })}
        </div>
        <div className={styles["footer-links"]}>
          <h5 className={styles["footer-heading"]}>FruitVillage</h5>
          {links.map((el) => {
            return (
              <Link className={styles["footer-link"]} to={el.url} key={el.id}>
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles["footer-socials"]}>
        <div className={styles["footer-icon-box"]}>
          <Instagram className={`${styles.icon} icon`} />
        </div>
        <div className={styles["footer-icon-box"]}>
          <Telegram className={`${styles.icon} icon`} />
        </div>
        <div className={styles["footer-icon-box"]}>
          <X className={`${styles.icon} icon`} />
        </div>
        <div className={styles["footer-icon-box"]}>
          <Facebook className={`${styles.icon} icon`} />
        </div>
      </div>

      <div className={styles["payments"]}>
        <div className={styles["footer-icon-box"]}>
          <Visa className={`${styles.icon} icon`} />
        </div>
        <div className={styles["footer-icon-box"]}>
          <Mastercard className={`${styles.icon} icon`} />
        </div>
      </div>
      <p className={styles["footer-text"]}>
        @2011 - {new Date().getFullYear()} Fruit Village online store - delivery
        of fruits
      </p>
      <p className={styles["footer-text"]}>
        designed by{" "}
        <a
          href="https://www.behance.net/vitaliiminakov"
          target="_blank"
          className={styles["footer-link"]}
        >
          Vitalii Minakov
        </a>
      </p>
    </footer>
  );
}
