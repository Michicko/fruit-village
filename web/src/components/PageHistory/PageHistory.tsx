import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import styles from "./PageHistory.module.css";
import { v4 as uuid } from "uuid";

export default function PageHistory() {
  const links = [{ name: "About", url: "/about" }];
  const history = links.map((el) => {
    return {
      ...el,
      id: uuid(),
    };
  });

  return (
    <header className={styles["page-history"]}>
      <Link to={"/"} className={styles.home}>
        <HomeIcon className={`${styles.icon} icon sm`} />
      </Link>
      {history.map((link) => {
        return (
          <div className={styles["link-box"]} key={uuid()}>
            <ArrowRight className={`${styles.icon} icon sm`} />
            <Link to={link.url} className={styles["history-link"]}>
              {link.name}
            </Link>
          </div>
        );
      })}
    </header>
  );
}
