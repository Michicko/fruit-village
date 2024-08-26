import FilterIcon from "../../assets/icons/filter.svg?react";
import Cancel from "../../assets/icons/cancel.svg?react";
import Price from "./Price";
import Categories from "./Categories";
import Taste from "./Taste";
import Country from "./Country";
import Weight from "./Weight";
import BestBefore from "./BestBefore";
import StorageCondition from "./StorageCondition";
import { useEffect } from "react";

type FilterProps = {
  isFilterOpened: boolean;
  setIsFilterOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Filter({
  isFilterOpened,
  setIsFilterOpened,
}: FilterProps) {
  useEffect(() => {
    const resize = () => {
      const screenSize = window.innerWidth;
      if (screenSize >= 1024) {
        if (!isFilterOpened) return;
        setIsFilterOpened(false);
      }
    };

    if (isFilterOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isFilterOpened, setIsFilterOpened]);

  return (
    <div className={isFilterOpened ? "filter filter--show" : "filter"}>
      <div className="filter__header">
        <div>
          <FilterIcon className="icon icon--light path-filled" />
          <h3 className="light">Filter</h3>
        </div>
        <button className="cancel" onClick={() => setIsFilterOpened(false)}>
          <Cancel className="icon icon--light" />
        </button>
      </div>
      <div className="filter__main">
        <div className="filter__box">
          <div className="filter__ctrls">
            <h5>Categories</h5>
          </div>
          <Categories />
        </div>
        <div className="filter__box">
          <Price />
          <Taste />
          <Country />
          <Weight />
          <BestBefore />
          <StorageCondition />
        </div>
      </div>
      <div className="filter__footer">
        <button className="btn btn--sm btn--trans">Reset all</button>
        <button className="btn btn--light btn--sm btn--hovered-green">
          Apply
        </button>
      </div>
    </div>
  );
}
