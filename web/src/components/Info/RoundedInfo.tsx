import styles from "./Info.module.css";
import CrossCircle from "../../assets/icons/cross-circle.svg?react";

interface RoundedInfoPropsTypes {
  text: string;
}

export default function RoundedInfo({ text }: RoundedInfoPropsTypes) {
  return (
    <div className={styles["rounded-info"]}>
      <p>{text}</p>
      <button className={styles.btn}>
        <CrossCircle className={`${styles["round-icon"]} icon md dark`} />
      </button>
    </div>
  );
}
