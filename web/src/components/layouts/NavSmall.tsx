import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { v4 as uuid } from "uuid";
import User from "../../assets/icons/user.svg?react";

export default function NavSmall() {
  const links = [
    {
      id: uuid(),
      name: "About",
      url: "/about",
    },
    {
      id: uuid(),
      name: "Shipping and payment",
      url: "/shipping-and-payment",
    },
    {
      id: uuid(),
      name: "Blog",
      url: "/blog",
    },
    {
      id: uuid(),
      name: "Sale",
      url: "/sale",
    },
  ];

  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  return (
    <div className={styles["nav-sm"]}>
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            to={link.url}
            className={`${styles["nav-link"]} ${
              link.url === pathname ? styles.current : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      <Link
        to={"/account"}
        className={`${styles["nav-link"]} ${styles["with-icon"]}`}
      >
        Ronald
        <User className={`${styles.icon} icon`} />
      </Link>
    </div>
  );
}
