import React from "react";
import { v4 as uuid } from "uuid";
import ArrowHeadDown from "../../assets/icons/arrow-head-down.svg?react";

type OptionProps = {
  name: string;
  value: string | number;
};

type SelectProps = {
  name: string;
  id: string;
  value: string | number;
  handleOnChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: OptionProps[];
};

export default function Select({
  name,
  id,
  value,
  handleOnChange,
  options,
}: SelectProps) {
  return (
    <label htmlFor="select" className="select__label">
      <select
        name={name}
        id={id}
        value={value}
        onChange={handleOnChange}
        className="select"
      >
        {options.map((opt) => {
          return (
            <option value={opt.value} key={uuid()}>
              {opt.name}
            </option>
          );
        })}
      </select>
      <ArrowHeadDown className="select__arrow" />
    </label>
  );
}
