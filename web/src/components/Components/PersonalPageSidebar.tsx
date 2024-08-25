import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

type PersonalPageSidebarProps = {
  links: {
    name: string;
    link: string;
    icon: ReactElement;
    showTotal: boolean;
    total?: number;
  }[];
};

export default function PersonalPageSidebar({
  links,
}: PersonalPageSidebarProps) {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;
  return (
    <aside className="personal-page__sidebar">
      {links.map((el) => {
        if (el.name === "Log out") {
          return (
            <button key={uuid()} type="button">
              {el.icon}
              <span>{el.name}</span>
            </button>
          );
        }
        return el.showTotal ? (
          <div key={uuid()} className="personal-page__link-box">
            <Link
              to={el.link}
              className={
                el.link === pathname
                  ? "personal-page__link personal-page__link--active"
                  : "personal-page__link"
              }
            >
              {el.icon}
              <span>{el.name}</span>
            </Link>
            <div className="total">
              <span>{el.total}</span>
            </div>
          </div>
        ) : (
          <Link
            to={el.link}
            key={uuid()}
            className={
              el.link === pathname
                ? "personal-page__link personal-page__link--active"
                : "personal-page__link"
            }
          >
            {el.icon}
            <span>{el.name}</span>
          </Link>
        );
      })}
    </aside>
  );
}
