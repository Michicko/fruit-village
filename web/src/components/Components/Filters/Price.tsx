import { useState } from "react";
import ArrowHead from "../../../assets/icons/arrow-head-down.svg?react";
import RangeSlider from "../RangeSlider";

export default function Price() {
  const [values, setValues] = useState({
    x: 10,
    y: 70,
    min: 0,
    max: 100
  });

  const cb = () => { };

  return (
    <div className="price-filter">
      <div className="filter__ctrls">
        <h5>Price</h5>
        <ArrowHead className="icon" />
      </div>
      <RangeSlider values={values} setValues={setValues} cb={cb} />
    </div>
  );
}
