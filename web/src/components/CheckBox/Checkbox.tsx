import styles from "./Checkbox.module.css";

interface CheckboxPropTypes {
  name: string;
  id: string;
  group: string;
}

export default function Checkbox({ name, id, group }: CheckboxPropTypes) {
  return (
    <label htmlFor={name} className={styles.checkbox} key={id}>
      <input type="checkbox" name={group} id={name} />
      <span className={styles["checkbox-check"]}></span>
      <p className={styles["checkbox-label"]}>{name}</p>
    </label>
  );
}
