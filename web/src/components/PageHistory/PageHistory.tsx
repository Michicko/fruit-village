import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import styles from "./PageHistory.module.css";
import { v4 as uuid } from "uuid";

export default function PageHistory() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((el) => el !== "");

  return (
    <header className={styles["page-history"]}>
      <Link to={"/"} className={styles.home}>
        <HomeIcon className={`${styles.icon} icon sm`} />
      </Link>
      {pathnames.map((link) => {
        return (
          <div className={styles["link-box"]} key={uuid()}>
            <ArrowRight className={`${styles.icon} icon sm`} />
            <Link to={`/${link}`} className={styles["history-link"]}>
              {link.replace(/-/g, " ")}
            </Link>
          </div>
        );
      })}
    </header>
  );
}
