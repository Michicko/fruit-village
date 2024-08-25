import SearchIcon from "../../../assets/icons/search.svg?react";

type SearchProps = {
  name: string;
  value: string;
  id: string;
};

export default function Search({ name, value, id }: SearchProps) {
  return (
    <div className="form__group form__group--light">
      <SearchIcon className="form__icon" />
      <input
        type="search"
        name={name}
        value={value}
        id={id}
        className="form__input-text form__input-text--light"
        placeholder="Search"
      />
    </div>
  );
}
