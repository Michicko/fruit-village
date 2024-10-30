import Button from "../Button/Button";
import styles from "./EmptyList.module.css";

interface EmptyListPropsTypes {
  title: string;
}

export default function EmptyList({ title }: EmptyListPropsTypes) {
  return (
    <div className={styles["empty-list"]}>
      <img src="/images/empty-list.gif" alt="empty box" className="img" />
      <h1 className={styles.title}>
        Your <span className="green">{title} list</span> is empty
      </h1>
      <Button
        bg="#42c84f"
        color="#fcfff9"
        hoveredBg="#0d6494"
        hoveredColor="#fcfff9"
        text="Go to shopping"
        link="/sale"
      />
    </div>
  );
}
