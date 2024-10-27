import React, { useRef, useState } from "react";
import styles from "./Info.module.css";
import PlusCircle from "../../assets/icons/plus-circle.svg?react";

interface RoundedInfoFormPropsTypes {
  name: string;
}

export default function RoundedInfoForm({ name }: RoundedInfoFormPropsTypes) {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const openInput = () => {
    const input = inputRef.current;
    if (input) {
      input.focus();
      setIsActive(true);
    }
  };

  const closeInput = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`${styles["rounded-info-form"]} ${
        isActive ? styles.active : ""
      }`}
    >
      <input
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        placeholder="Enter allergy"
        onChange={onChange}
        onBlur={closeInput}
        className={styles["round-info-input"]}
      />
      <button className={styles.btn} onClick={openInput}>
        <PlusCircle className={`${styles["form-icon"]} icon dark`} />
      </button>
    </div>
  );
}
