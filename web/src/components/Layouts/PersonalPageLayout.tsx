import PersonalLinks from "./PersonalLinks";
import Logout from "../../assets/icons/logout.svg?react";
import styles from "./PageLayout.module.css";
import usePersonalPageContext from "../../hooks/usePersonalPageContext";

interface PersonalPageLayoutPropsTypes {
  children: React.ReactNode;
}

export default function PersonalPageLayout({
  children,
}: PersonalPageLayoutPropsTypes) {
  const { pageTitle } = usePersonalPageContext();

  return (
    <>
      <h1 className="primary-heading">
        {pageTitle} <span className="line"></span>
      </h1>
      <aside className={styles["left-sidebar"]}>
        <PersonalLinks theme="dark" />
        <button className={styles["logout-btn"]}>
          <Logout className="icon green" />
          Log out
        </button>
      </aside>
      <main className="main">{children}</main>
    </>
  );
}
