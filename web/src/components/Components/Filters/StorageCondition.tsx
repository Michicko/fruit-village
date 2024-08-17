import ArrowHead from "../../../assets/icons/arrow-head-down.svg?react";
import { v4 as uuid } from "uuid";

export default function StorageCondition() {
  const conditions = ["-0.5", "0", "2", "13", "10-13", "7-10"];
  return (
    <div className="storage-filter">
      <div className="filter__ctrls">
        <h5>Storage conditions</h5>
        <ArrowHead className="icon" />
      </div>
    </div>
  );
}
