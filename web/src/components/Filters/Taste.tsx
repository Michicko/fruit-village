import { tastes } from "../../data";
import Checkbox from "../CheckBox/Checkbox";
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
            <Checkbox name={el.name} id={el.id} group="taste" key={el.id} />
          );
        })}
      </div>
    </FiltersDropdown>
  );
}
