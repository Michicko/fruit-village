import styles from "./Phone.module.css";
import PhoneIcon from "../../assets/icons/phone.svg?react";

interface PhoneProps {
  text: string;
  color: "dark" | "light" | "green";
  showOnSmallScreen: boolean;
  noIcon?: boolean;
}

export default function Phone({
  text,
  color,
  showOnSmallScreen,
  noIcon,
}: PhoneProps) {
  return (
    <a
      href={`tel:${text}`}
      className={`${styles.phone} ${styles[color]} ${
        showOnSmallScreen ? styles["small-sc"] : styles["lg-sc"]
      }`}
    >
      {!noIcon && <PhoneIcon className={`${styles.icon} icon md`} />}
      {text}
    </a>
  );
}
