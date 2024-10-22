import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MultiRangeSlider.module.css";
import { MultiRangeSliderPropsTypes } from "../../constants";

export default function MultiRangeSlider({
  min,
  max,
  onChange,
}: MultiRangeSliderPropsTypes) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);
  const rangeRef = useRef<HTMLDivElement | null>(null);

  const getPercent = useCallback(
    (value: number) => {
      return ((value - min) / (max - min)) * 100;
    },
    [max, min]
  ); 

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const maxValInput = maxInputRef.current;
    const range = rangeRef.current;

    if (maxValInput) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValInput.value);
      
      if (range) {
        range.style.left = `${minPercent}%`;
        range.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [getPercent, maxVal, minVal]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minValInput = minInputRef.current;
    const range = rangeRef.current;

    if (minValInput) {
      const minPercent = getPercent(+minValInput.value);
      const maxPercent = getPercent(maxVal);

      if (range) {
        range.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minInputRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={`${styles.thumb} ${
          minVal > max - 100
            ? styles["thumb--zindex-5"]
            : styles["thumb--zindex-3"]
        }`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxInputRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={`${styles.thumb} ${styles["thumb--zindex-4"]}`}
      />

      <div className={styles.slider}>
        <div className={styles["slider__track"]} />
        <div ref={rangeRef} className={styles["slider__range"]} />
        <div className={styles["slider__left-value"]}>{minVal}</div>
        <div className={styles["slider__right-value"]}>{maxVal}</div>
      </div>
    </div>
  );
}
