import ArrowHead from "../../assets/icons/arrow-head-down.svg?react";
import { v4 as uuid } from "uuid";

export default function Taste() {
  const tastes = ["citrus", "fresh", "sour", "sour-sweet", "sweet", "bitter"];
  return (
    <div className="taste-filter">
      <div className="filter__ctrls">
        <h5>Taste</h5>
        <ArrowHead className="icon" />
      </div>
      <div className="filter__list">
        {tastes.map((taste) => {
          return (
            <label
              htmlFor={taste}
              className="filter__check-label"
              key={uuid()}
            >
              <input
                type="checkbox"
                name="taste"
                id={taste}
                className="filter__check"
              />
              <span>{taste}</span>
            </label>
          );
        })}
      </div>
      <button className="filter__btn">
        <span>show all</span>
        <ArrowHead className="icon" />
      </button>
    </div>
  );
}
