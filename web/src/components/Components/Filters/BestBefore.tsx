import ArrowHead from "../../../assets/icons/arrow-head-down.svg?react";
import { v4 as uuid } from "uuid";

export default function BestBefore() {
  const storage = [
    "5-10 d",
    "3 wk",
    "1-2 wk",
    "1-2 wk",
    "3 wk",
    "4-6 wk",
    "2 mo",
    "1-5 wk",
    "2-3 wk",
    "3-4 wk",
    "2-4 wk",
    "2-3 wk",
    "3-5 wk"
  ];

  return (
    <div className="lifetime-filter">
      <div className="filter__ctrls">
        <h5>Best before</h5>
        <ArrowHead className="icon" />
      </div>
      {/* select day, week or month */}
      {/* if day show select 1 - 7days for from and to */}
      {/* if week show select 1 - 52weeks for from and to */}
      {/* if month show select 1 - 12months for from and to */}
    </div>
  );
}
