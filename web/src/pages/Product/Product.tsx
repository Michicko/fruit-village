import RatingNumber from "../../components/Ratings/RatingNumber";
import Stars from "../../components/Ratings/Stars";
import styles from './Product.module.css';

export default function Product() {
  return (
    <main className={styles.main}>
      <h1>Product</h1>
      <Stars value={3.6} size="lg" />
      <RatingNumber value={3.6} size="lg" />
    </main>
  );
}
