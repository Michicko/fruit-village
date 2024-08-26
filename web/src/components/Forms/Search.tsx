import SearchIcon from "../../assets/icons/search.svg?react";

type SearchProps = {
  name: string;
  value: string;
  id: string;
  color: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Search({ name, value, id, color, handleOnChange }: SearchProps) {
  return (
    <div className={`form__group form__group--${color}`}>
      <SearchIcon className="form__icon" />
      <input
        type="search"
        name={name}
        value={value}
        id={id}
        className={`form__input-text form__input-text--${color}`}
        placeholder="Search"
        onChange={handleOnChange}
      />
    </div>
  );
}
