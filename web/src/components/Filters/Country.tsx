import React from "react";
import ArrowHead from "../../assets/icons/arrow-head-down.svg?react";
import { v4 as uuid } from "uuid";

export default function Country() {
  const countries = [
    "india",
    "brazil",
    "united states",
    "united kingdom",
    "indonesia",
  ];
  return (
    <div className="country-filter">
      <div className="filter__ctrls">
        <h5>Manufacturer country</h5>
        <ArrowHead className="icon" />
      </div>
      <div className="filter__list">
        {countries.map((country) => {
          return (
            <label
              htmlFor={country}
              className="filter__check-label"
              key={uuid()}
            >
              <input
                type="checkbox"
                name="country"
                id={country}
                className="filter__check"
              />
              <span>{country}</span>
            </label>
          );
        })}
      </div>
      <button className="filter__btn">
        <span>show all</span>
        <ArrowHead className="icon" />
      </button>
    </div>
  );
}
