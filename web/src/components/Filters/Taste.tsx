import { tastes } from "../../data";
import styles from "./Filters.module.css";
import FiltersDropdown from "./FiltersDropdown";
import { v4 as uuid } from "uuid";

export default function Taste() {
  const mappedTatest = tastes.map((el) => {
    return { id: uuid(), name: el };
  });

  return (
    <FiltersDropdown showBtn={true} name="Taste">
      <div className={styles.list}>
        {mappedTatest.map((el) => {
          return (
            <label htmlFor={el.name} className={styles.taste} key={el.id}>
              <input type="checkbox" name="taste" id={el.name} />
              <span className={styles["taste-checkbox"]}></span>
              <p className={styles["taste-label"]}>{el.name}</p>
            </label>
          );
        })}
      </div>
    </FiltersDropdown>
  );
}
