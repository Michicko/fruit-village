import styles from "./RatingNumber.module.css";

interface RatingNumberPropsTypes {
  value: number;
  size: "sm" | "md" | "lg" | "xl";
}
export default function RatingNumber({
  value = 0,
  size,
}: RatingNumberPropsTypes) {
  return (
    <p className={`${styles["rating-number"]} ${styles[size]}`}>{value}</p>
  );
}
