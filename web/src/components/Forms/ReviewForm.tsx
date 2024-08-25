import { useState } from "react";
import Select from "../Components/Select";
import { ratings } from "../../data";

export default function ReviewForm() {
  const temOptions = ratings.map((rating) => {
    return {
      name: `${rating}`,
      value: rating,
    };
  });

  const options = [
    {
      name: "⭐⭐⭐⭐⭐",
      value: "",
    },
    ...temOptions,
  ];

  const [value, setValue] = useState(options[0].value);
  const handleOnChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setValue(Number(target.value));
    target.blur();
  };

  return (
    <form className="form__review">
      <div className="form__control">
        <label htmlFor="rating" className="form__label">
          Star rating
        </label>
        <Select
          options={options}
          name="rating"
          id="rating"
          value={value}
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="form__control">
        <label htmlFor="review" className="form__label">
          Review
        </label>
        <textarea
          name="review"
          id="review"
          rows={5}
          className="form__textarea"
        ></textarea>
      </div>
      <button className="btn btn--sm btn--primary">Submit Review</button>
    </form>
  );
}
