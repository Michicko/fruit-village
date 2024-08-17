import SortIcon from "../../../assets/icons/sort.svg?react";
import Sort from "../Filters/Sort";

type DesktopTopProps = {
  category: string;
};

export default function DesktopTop({ category }: DesktopTopProps) {
  return (
    <div className="products__top desktop">
      <h3>{category}</h3>
      <div className="products__top-sort-box">
        <div className="sort-box-dsc">
          <SortIcon className="icon" />
          <span>Sort by</span>
        </div>
        <Sort />
      </div>
    </div>
  );
}
