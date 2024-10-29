import styles from "./Product.module.css";
import Button from "../Button/Button";
import { useCallback, useEffect, useState } from "react";

interface ProductReviewFormPropsTypes {
  setIsFormOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductReviewForm({
  setIsFormOpened,
}: ProductReviewFormPropsTypes) {
  const [options, setOptions] = useState<{ name: number; value: number }[]>([]);

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
  );
}
