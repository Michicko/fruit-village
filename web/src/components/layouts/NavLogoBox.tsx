import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.css";
import Menu from "../../assets/icons/menu.svg?react";
import Close from "../../assets/icons/close.svg?react";
import { NavLogoBoxProps } from "../../constants";

export default function NavLogoBox({
  isMobileNavOpened,
  toggleMobileNav,
  showTextSmallScreen,
  showButton,
}: NavLogoBoxProps) {
  return (
    <div className={styles["logo-box"]}>
      {showButton && (
        <button className={styles["nav-btn"]} onClick={toggleMobileNav}>
          {isMobileNavOpened ? (
            <Close className={`${styles.icon} icon lg`} />
          ) : (
            <Menu className={`${styles.icon} icon lg`} />
          )}
        </button>
      )}
      <Logo showTextSmallScreen={showTextSmallScreen || false} />
    </div>
  );
}
