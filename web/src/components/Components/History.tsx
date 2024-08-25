import { Link } from "react-router-dom";
import Home from "../../assets/icons/home.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import { v4 as uuid } from "uuid";
import React from "react";

type HistoryObjectProps = {
  name: string | undefined;
  link: string;
};

type HistoryProps = {
  history: HistoryObjectProps[];
};

export default function History({ history }: HistoryProps) {
  return (
    <div className="history">
      <Link to={"/"} className="history__link">
        <Home className="history__icon" />
      </Link>
      {history.map((el) => {
        return (
          <React.Fragment key={uuid()}>
            <ArrowRight className="history__icon small" />
            <Link to={el.link} className="history__link">
              {el.name}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
