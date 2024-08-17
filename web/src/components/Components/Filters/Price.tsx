import ArrowHead from "../../../assets/icons/arrow-head-down.svg?react";
import Minus from "../../../assets/icons/minus.svg?react";

export default function Price() {
  return (
    <div className="price-filter">
      <div className="filter__ctrls">
        <h5>Price</h5>
        <ArrowHead className="icon" />
      </div>
    </div>
  );
}
