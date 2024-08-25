import React from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function GeneralPageSidebar() {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;
  const links = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Shipping and payment",
      link: "/shipping-and-payment",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contacts",
      link: "/contacts",
    },
  ];
  return (
    <aside className="page__sidebar">
      {links.map((el) => {
        return (
          <Link
            to={el.link}
            key={uuid()}
            className={
              pathname === el.link
                ? "page__link  page__link--active"
                : "page__link"
            }
          >
            {el.name}
          </Link>
        );
      })}
    </aside>
  );
}
