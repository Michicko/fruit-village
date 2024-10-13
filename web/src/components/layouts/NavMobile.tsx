import styles from "./Nav.module.css";
import NavLogoBox from "./NavLogoBox";
import UserOutline from "../../assets/icons/user-outline.svg?react";
import Orders from "../../assets/icons/orders.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Eye from "../../assets/icons/eye.svg?react";
import Gift from "../../assets/icons/gift.svg?react";
import HeartOutline from "../../assets/icons/heart-outline.svg?react";
import Close from "../../assets/icons/close.svg?react";
import { Link } from "react-router-dom";
import User from "../../assets/icons/user.svg?react";
import PlusBoxed from "../../assets/icons/plus-boxed.svg?react";
import Logout from "../../assets/icons/logout.svg?react";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import CatalogButton from "../CatalogButton/CatalogButton";
import { v4 as uuid } from "uuid";
import { links } from "../../data";
import { useState } from "react";

interface NavMobileProps {
  isMobileNavOpened: boolean;
  setShowCatalogModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeMobileNav: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavMobile({
  isMobileNavOpened,
  closeMobileNav,
  setShowCatalogModal,
}: NavMobileProps) {
  const user = { name: "Ronald" };
  const [isMainLinksOpened, setIsMainLinksOpened] = useState(true);

  const toggleMainLinks = () => {
    setIsMainLinksOpened(!isMainLinksOpened);
  };

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
      name: "waitlist",
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

  return (
    <aside
      className={`${styles["nav-mobile"]} ${
        isMobileNavOpened ? styles.isOpened : ""
      }`}
    >
      <div className={styles["mobile-bg"]}>
        <div className={styles["header"]}>
          <div className={styles["first"]}>
            <NavLogoBox showButton={false} showTextSmallScreen={true} />
            <button className={styles["close-btn"]} onClick={closeMobileNav}>
              <Close className={`${styles.icon} icon md`} />
            </button>
          </div>
          {user && (
            <div className={styles["last"]}>
              <Link to={"/account"} className={styles["profile-btn"]}>
                <User className={`${styles.icon} icon`} />
                {user.name}
              </Link>
              <button className={styles["logout-btn"]}>
                <Logout className={`${styles.icon} icon`} />
              </button>
            </div>
          )}
        </div>
        <div className={styles["main"]}>
          <div className={styles["mobile-links-box"]}>
            <CatalogButton
              fullWidth={true}
              onClickHandler={() => setShowCatalogModal(false)}
            />
            {user && (
              <div className={styles["mobile-links"]}>
                {userLinks.map((link) => {
                  return (
                    <Link
                      to={link.url}
                      className={`${styles["mobile-link"]}`}
                      key={link.id}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            )}
            {user && (
              <button
                className={`${styles["gen-btn"]} ${
                  isMainLinksOpened ? "" : styles["links-closed"]
                }`}
                onClick={toggleMainLinks}
              >
                <div>
                  <PlusBoxed className={`${styles.icon} icon`} />
                  <span>More</span>
                </div>
                <ArrowDown className={`${styles.icon} ${styles.arrow} icon`} />
              </button>
            )}
            <div
              className={`${styles["mobile-gen"]} ${
                !isMainLinksOpened ? styles.hide : styles.isOpened
              } ${!user ? styles["no-user"] : ""}`}
            >
              <div className={styles["mobile-links"]}>
                {links.map((link) => {
                  return (
                    <Link
                      to={link.url}
                      className={`${styles["mobile-link"]}`}
                      key={link.id}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
