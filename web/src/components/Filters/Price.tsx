import { MultiRangeSliderPropsTypes } from "../../constants";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import styles from "./Filters.module.css";
import FiltersDropdown from "./FiltersDropdown";

export default function Price({ min, max, onChange }: MultiRangeSliderPropsTypes) {
  return (
    <FiltersDropdown showBtn={false} name="Price">
      <div className={styles.price}>
        <MultiRangeSlider min={min} max={max} onChange={onChange} />
      </div>
    </FiltersDropdown>
  );
}
