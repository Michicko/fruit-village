import RatingNumber from "../Ratings/RatingNumber";
import Stars from "../Ratings/Stars";
import Button from "../Button/Button";
import { useCallback, useEffect, useState } from "react";
import styles from "./Product.module.css";

interface ProductReviewsPropsTypes {
  ratingsAverage: number;
  reviews: number;
}

export default function ProductReviews({
  ratingsAverage,
  reviews,
}: ProductReviewsPropsTypes) {
  const [options, setOptions] = useState<{ name: number; value: number }[]>([]);
  const [isFormOpened, setIsFormOpened] = useState(false);

  const generateOptions = useCallback(() => {
    let max = 0.1;
    const nums = [];

    while (max <= 5) {
      nums.push({ name: max, value: max });
      max = +(max + 0.1).toFixed(1);
    }

    setOptions(nums);
  }, []);

  useEffect(() => {
    generateOptions();
  }, [generateOptions]);

  return (
    <div className="product-reviews">
      {isFormOpened ? (
        <form className={styles["reviews-form"]}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="text-input"
          />
          <select name="rating" id="rating" className="select">
            <option value="">-- Ratings --</option>
            {options.map((el) => {
              return (
                <option value={el.name} key={el.name}>
                  {el.value}
                </option>
              );
            })}
          </select>
          <textarea
            name="review"
            id="review"
            placeholder="Review"
            className="text-area"
            rows={4}
          ></textarea>
          <div className={styles.btns}>
            <Button
              bg="#42c84f"
              color="#fcfff9"
              hoveredBg="#0d6494"
              hoveredColor="#fcfff9"
              text="Submit"
              type={"submit"}
            />
            <Button
              bg="#bbbbbb"
              color="#fcfff9"
              hoveredBg="#979797"
              hoveredColor="#fcfff9"
              text={"cancel"}
              type={"button"}
              onClickHandler={() => setIsFormOpened(false)}
            />
          </div>
        </form>
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
    </div>
  );
}
