import RatingNumber from "../components/Ratings/RatingNumber";
import Stars from "../components/Ratings/Stars";

export default function Product() {
  return (
    <div>
      <h1>Product</h1>
      <Stars value={3.6} size="lg" />
      <RatingNumber value={3.6} size="lg" />
    </div>
  );
}
