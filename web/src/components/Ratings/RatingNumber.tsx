import { RatingsPropsTypes } from "../../constants";
import styles from "./RatingNumber.module.css";


export default function RatingNumber({
  value = 0,
  size,
}: RatingsPropsTypes) {
  return (
    <p className={`${styles["rating-number"]} ${styles[size]}`}>{value}</p>
  );
}
