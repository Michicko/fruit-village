import styles from "./Phone.module.css";
import PhoneIcon from "../../assets/icons/phone.svg?react";

interface PhoneProps {
  text: string;
  color: "dark" | "light";
  showOnSmallScreen: boolean;
}

export default function Phone({ text, color, showOnSmallScreen }: PhoneProps) {
  return (
    <a
      href={`tel:${text}`}
      className={`${styles.phone} ${styles[color]} ${
        showOnSmallScreen ? styles["small-sc"] : styles["lg-sc"]
      }`}
    >
      <PhoneIcon className={`${styles.icon} icon md`} />
      {text}
    </a>
  );
}
