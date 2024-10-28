import styles from './PageLayout.module.css';
import PersonalLinks from "./PersonalLinks";
import Logout from "../../assets/icons/logout.svg?react";

export default function LeftSidebar() {
  return (
    <aside className={styles["left-sidebar"]}>
      <PersonalLinks theme="dark" />
      <button className={styles["logout-btn"]}>
        <Logout className="icon green" />
        Log out
      </button>
    </aside>
  );
}
