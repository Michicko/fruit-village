import { Link, useLocation } from "react-router-dom";
import { privateLinks } from "../../data";
import { v4 as uuid } from "uuid";

type SidebarLinkProps = {
  theme: "light" | "dark";
  cb?: () => void;
};

export default function PrivateLinks({ theme, cb }: SidebarLinkProps) {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;
  return (
    <>
      {privateLinks.map((el) => {
        if (theme === "light" && el.name === "Log out") return;
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
                  ? `personal-page__link ${theme} personal-page__link--active`
                  : `personal-page__link ${theme}`
              }
              onClick={cb}
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
                ? `personal-page__link ${theme} personal-page__link--active`
                : `personal-page__link ${theme}`
            }
            onClick={cb}
          >
            {el.icon}
            <span>{el.name}</span>
          </Link>
        );
      })}
    </>
  );
}
