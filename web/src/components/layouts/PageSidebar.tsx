import { Link, useLocation } from "react-router-dom";
import { links } from "../../data";
import styles from "./PageLayout.module.css";
import { v4 as uuid } from "uuid";

export default function PageSidebar() {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;
  return (
    <aside className={styles["page-sidebar"]}>
      {[
        ...links.filter((el) => el.name !== "Sale"),
        { id: uuid(), name: "Contacts", url: "/contacts" },
      ].map((el) => {
        return (
          <Link
            key={el.id}
            className={`${styles["sidebar-link"]} ${
              pathname === el.url ? styles.active : ""
            }`}
            to={el.url}
          >
            {el.name}
          </Link>
        );
      })}
    </aside>
  );
}
