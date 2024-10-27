import styles from "./Nav.module.css";
import NavLogoBox from "./NavLogoBox";
import Close from "../../assets/icons/close.svg?react";
import { Link } from "react-router-dom";
import User from "../../assets/icons/user.svg?react";
import PlusBoxed from "../../assets/icons/plus-boxed.svg?react";
import Logout from "../../assets/icons/logout.svg?react";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import CatalogButton from "../CatalogButton/CatalogButton";
import { links } from "../../data";
import { useState } from "react";
import PersonalLinks from "./PersonalLinks";
import NavLink from "./NavLink";

interface NavMobileProps {
  isMobileNavOpened: boolean;
  setShowCatalogModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeMobileNav: () => void;
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
              onClickHandler={() => {
                setShowCatalogModal(true);
                closeMobileNav();
              }}
            />
            {user && (
              <PersonalLinks theme="light" handleOnClick={closeMobileNav} />
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
                    <NavLink
                      link={link}
                      onClick={closeMobileNav}
                      key={link.id}
                    />
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
