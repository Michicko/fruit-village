import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import User from "../../assets/icons/user-dark.svg?react";

export default function SmallNav() {
  type UserProps = {
    name: string;
  };
  const [user, setUser] = useState<UserProps | null>(null);
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
      name: "Sale",
      link: "/sale",
    },
  ];
  const { pathname: path, search } = useLocation();
  const pathname = path + search;



  return (
    <div className="nav__small">
      <div className="nav__small-links">
        {links.map((el) => {
          return (
            <Link
              to={el.link}
              key={uuid()}
              className={
                pathname === el.link
                  ? "nav__link nav__link--active"
                  : "nav__link"
              }
            >
              {el.name}
            </Link>
          );
        })}
      </div>
      <div className="nav__small-end">
        {!user ? (
          <Link to={"/login"} className="nav__link">
            login
          </Link>
        ) : (
          <Link to={"/profile"} className="nav__small-profile">
            <span>{user.name}</span>
            <User className="nav__small-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}
