import styles from "./Counter.module.css";
import Plus from "../../assets/icons/plus.svg?react";
import Minus from "../../assets/icons/minus.svg?react";
import { useCallback } from "react";

interface CounterPropsTypes {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

export default function Counter({ count, setCount, total }: CounterPropsTypes) {
  const increase = useCallback(() => {
    let curr = count + 1;
    if (curr > total) {
      curr = total;
    }
    setCount(curr);
  }, [count, setCount, total]);

  const decrease = useCallback(() => {
    let curr = count - 1;
    if (curr < 1) {
      curr = 1;
    }
    setCount(curr);
  }, [count, setCount]);

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrease}>
        <Minus className="icon sm stroke dark" />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={count}
        className={styles.count}
        readOnly
        disabled
      />
      <button className={styles.btn} onClick={increase}>
        <Plus className="icon sm stroke dark" />
      </button>
    </div>
  );
}
