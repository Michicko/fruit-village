import styles from "./Nav.module.css";
import UserOutline from "../../assets/icons/user-outline.svg?react";
import Orders from "../../assets/icons/orders.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Eye from "../../assets/icons/eye.svg?react";
import Gift from "../../assets/icons/gift.svg?react";
import HeartOutline from "../../assets/icons/heart-outline.svg?react";
import { v4 as uuid } from "uuid";
import { Link, useLocation } from "react-router-dom";
import { waitList, wishList } from "../../data";

interface PersonalLinksPropsTYpes {
  handleOnClick?: () => void;
  theme: "dark" | "light";
}

export default function PersonalLinks({
  handleOnClick,
  theme,
}: PersonalLinksPropsTYpes) {
  const total = { wishList: wishList.length, waitList: waitList.length };
  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  const userLinks = [
    {
      id: uuid(),
      name: "My account",
      url: "/account",
      icon: <UserOutline className={`${styles.icon} ${styles.outline} icon`} />,
    },
    {
      id: uuid(),
      name: "My orders",
      url: "/orders",
      icon: <Orders className={`${styles.icon} ${styles.fill} icon`} />,
    },
    {
      id: uuid(),
      name: "Wishlist",
      url: "/wishlist",
      icon: (
        <HeartOutline className={`${styles.icon} ${styles.outline} icon`} />
      ),
    },
    {
      id: uuid(),
      name: "Waitlist",
      url: "/waitlist",
      icon: <Clock className={`${styles.icon} ${styles.outline} icon`} />,
    },
    {
      id: uuid(),
      name: "Viewed products",
      url: "/viewed-products",
      icon: <Eye className={`${styles.icon} ${styles.fill} icon`} />,
    },
    {
      id: uuid(),
      name: "My bonus account",
      url: "/bonuses",
      icon: <Gift className={`${styles.icon} ${styles.fill} icon`} />,
    },
  ];

  const getLinkStyles = (url: string) => {
    return `${styles["mobile-link"]} ${styles[theme]} ${
      url === pathname ? styles.active : ""
    }`;
  };

  return (
    <div className={styles["mobile-links"]}>
      {userLinks.map((link) => {
        if (link.name === "Wishlist" || link.name === "Waitlist") {
          const { name } = link;
          return (
            <div className={styles["mobile-link-box"]} key={link.id}>
              <Link
                to={link.url}
                className={getLinkStyles(link.url)}
                onClick={handleOnClick}
              >
                {link.icon}
                {link.name}
              </Link>
              <div className={`${styles["total"]} ${styles[theme]}`}>
                <span>
                  {name === "Waitlist" ? total.waitList : total.wishList}
                </span>
              </div>
            </div>
          );
        }

        return (
          <Link
            to={link.url}
            className={getLinkStyles(link.url)}
            key={link.id}
            onClick={handleOnClick}
          >
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
