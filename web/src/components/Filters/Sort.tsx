import styles from "./Filters.module.css";
import { v4 as uuid } from "uuid";

interface OptionTypes {
  name: string;
  value: string;
}

interface SortTypes {
  id: string;
  options: OptionTypes[];
}

export default function Sort({ id, options }: SortTypes) {
  const mappedOptions = options.map((el) => {
    return { ...el, id: uuid() };
  });

  return (
    <select className={styles.sort} id={id}>
      {mappedOptions.map((opt) => {
        return (
          <option value={opt.value} key={opt.id}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
}
