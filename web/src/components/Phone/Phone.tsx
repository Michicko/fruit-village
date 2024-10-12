import styles from "./Phone.module.css";
import PhoneIcon from "../../assets/icons/phone.svg?react";
export default function Phone() {
  return (
    <a href="tel:+1(805)555-0011" className={styles.phone}>
      <PhoneIcon className={`${styles.icon} icon md`} />
      (805) 555-0011
    </a>
  );
}
