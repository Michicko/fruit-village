import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.css";
import Menu from "../../assets/icons/menu.svg?react";
import Close from "../../assets/icons/close.svg?react";

interface NavLogoBoxProps {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavLogoBox({
  isMobileNavOpened,
  setIsMobileNavOpened,
}: NavLogoBoxProps) {
  return (
    <div className={styles["logo-box"]}>
      <button
        className={styles["nav-btn"]}
        onClick={() => setIsMobileNavOpened(!isMobileNavOpened)}
      >
        {isMobileNavOpened ? (
          <Close className={`${styles.icon} icon lg`} />
        ) : (
          <Menu className={`${styles.icon} icon lg`} />
        )}
      </button>
      <Logo showTextSmallScreen={false} />
    </div>
  );
}
