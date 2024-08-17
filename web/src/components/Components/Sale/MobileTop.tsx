import SortIcon from "../../../assets/icons/sort.svg?react";
import FilterIcon from "../../../assets/icons/filter.svg?react";

type MobileTopProps = {
  category: string;
  setIsFilterOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileTop({
  category,
  setIsFilterOpened,
}: MobileTopProps) {
  return (
    <div className="products__top mobile">
      <h3>{category}</h3>
      <div className="products__top-btns">
        <button className="btn btn--flex btn--text-dark">
          <SortIcon className="btn__icon" />
          <span>Sort by</span>
        </button>
        <button
          className="btn btn--flex btn--text-dark"
          onClick={() => setIsFilterOpened(true)}
        >
          <FilterIcon className="btn__icon" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}
