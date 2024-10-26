import { useEffect, useRef, useState } from "react";
import styles from "./Info.module.css";
import slugify from "slugify";
import Pen from "../../assets/icons/pen.svg?react";

interface InfoPropsTypes {
  name: string;
  type: string;
  intialValue: string | number;
}

export default function Info({ name, type, intialValue }: InfoPropsTypes) {
  const [value, setValue] = useState(intialValue);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const editInfo = () => {
    setIsEditing(true);
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  useEffect(() => {
    const input = inputRef.current;
    if (isEditing && input) {
      input.focus();
    }
  }, [isEditing]);

  return (
    <div className={styles.info}>
      <label htmlFor={slugify(name, { lower: true })}>{name}:</label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={slugify(name, { lower: true })}
        disabled={!isEditing}
        value={value}
        style={{
          width: value.toString().length + 3 + "ch",
        }}
        onBlur={() => setIsEditing(false)}
        onChange={handleOnchange}
      />
      <button className={styles["edit-btn"]} onClick={editInfo}>
        <Pen className={`${styles.icon} icon stroke dark`} />
      </button>
    </div>
  );
}
