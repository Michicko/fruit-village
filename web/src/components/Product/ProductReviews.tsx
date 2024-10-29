import RatingNumber from "../Ratings/RatingNumber";
import Stars from "../Ratings/Stars";
import Button from "../Button/Button";
import { useState } from "react";
import styles from "./Product.module.css";
import ProductReviewForm from "./ProductReviewForm";
import Review from "../Review/Review";
import { reviews as reviewList } from "../../data";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";

interface ProductReviewsPropsTypes {
  ratingsAverage: number;
  reviews: number;
}

export default function ProductReviews({
  ratingsAverage,
  reviews,
}: ProductReviewsPropsTypes) {
  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div className="product-reviews">
      {isFormOpened ? (
        <ProductReviewForm setIsFormOpened={setIsFormOpened} />
      ) : (
        <div className={styles["ratings-box"]}>
          <div>
            <RatingNumber value={ratingsAverage} size="lg" />
            <Stars value={ratingsAverage} size="lg" />
            <p>{reviews} reviews</p>
          </div>
          <Button
            bg="#42c84f"
            color="#fcfff9"
            hoveredBg="#0d6494"
            hoveredColor="#fcfff9"
            text="Write a review"
            type={"button"}
            onClickHandler={() => setIsFormOpened(true)}
          />
        </div>
      )}
      <div className="reviews-box">
        <div className={styles.reviews}>
          {reviewList.map((review) => {
            return <Review review={review} key={review.id} />;
          })}
        </div>
        <button className={styles['more-btn']}>
          Show more <ArrowDown className="icon md dark" />
        </button>
      </div>
    </div>
  );
}
