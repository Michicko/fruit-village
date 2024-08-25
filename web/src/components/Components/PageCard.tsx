import { ReactElement } from "react";
import { v4 as uuid } from "uuid";

type ItemProps = {
  title: string;
  description: string;
  icon: ReactElement;
};

type PageCardProps = {
  item: ItemProps;
};

export default function PageCard({ item }: PageCardProps) {
  return (
    <div className="page-card" key={uuid()}>
      <div className="page-card__icon-box">{item.icon}</div>
      <h5 className="page-card__heading">{item.title}</h5>
      <p className="text">{item.description}</p>
    </div>
  );
}
