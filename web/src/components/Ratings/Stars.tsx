import { RatingsPropsTypes } from "../../constants";
import styles from "./Stars.module.css";

export default function Stars({ value = 0, size }: RatingsPropsTypes) {
  return (
    <div data-star={value} className={`${styles.stars} ${styles[size]}`}></div>
  );
}
