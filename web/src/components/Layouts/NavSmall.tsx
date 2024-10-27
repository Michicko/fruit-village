import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { v4 as uuid } from "uuid";
import User from "../../assets/icons/user.svg?react";
import { links } from "../../data";
import NavLink from "./NavLink";

export default function NavSmall() {
  const navLinks = links.map((link) => {
    return {
      ...link,
      id: uuid(),
    };
  });

  const user = null;

  return (
    <div className={styles["nav-sm"]}>
      {navLinks.map((link) => {
        return <NavLink link={link} key={link.id} />;
      })}

      <>
        {user ? (
          <Link
            to={"/account"}
            className={`${styles["nav-link"]} ${styles["with-icon"]}`}
          >
            Ronald
            <User className={`${styles.icon} icon`} />
          </Link>
        ) : (
          <Link
            to={"/login"}
            className={`${styles["nav-link"]} ${styles["with-icon"]}`}
          >
            Login
          </Link>
        )}
      </>
    </div>
  );
}
