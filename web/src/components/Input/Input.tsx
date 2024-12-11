import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import Checkmark from "../../assets/icons/checkmark.svg?react";

interface InputPropsTypes {
  label: string;
  name: string;
  type: string;
  id: string;
  onChange?: (name: string, value: string) => void;
}

export default function Input({
  label,
  name,
  type,
  id,
  onChange,
}: InputPropsTypes) {
  const [val, setVal] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timeout = useRef<number | null>(null);

  const handleOnChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setVal(target.value);
    if (onChange) {
      onChange(target.name, target.value);
    }
  };

  // handle auto-fill
  useEffect(() => {
    const input = inputRef.current;
    if (input && input.matches(":autofill")) {
      timeout.current = setTimeout(() => {
        setVal(val + " ");
      }, 100);

      return () => clearTimeout(timeout.current);
    }
  }, [val]);

  return (
    <fieldset
      className={!val ? styles.fieldset : `${styles.fieldset} ${styles.filled}`}
    >
      <legend>{label}</legend>
      <input
        type={type}
        name={name}
        id={id}
        value={val}
        placeholder=""
        ref={inputRef}
        onChange={handleOnChange}
      />
      <Checkmark className={`${styles.icon} icon sm`} />
    </fieldset>
  );
}
