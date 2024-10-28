import styles from "./Stars.module.css";

interface StarsPropsTypes {
  value: number;
  size: "sm" | "md" | "lg" | "xl";
}

export default function Stars({ value = 0, size }: StarsPropsTypes) {
  return (
    <div data-star={value} className={`${styles.stars} ${styles[size]}`}></div>
  );
}
