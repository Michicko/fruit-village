import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css";
import PageSidebar from "./PageSidebar";
import PageHistory from "../PageHistory/PageHistory";

export default function PageLayout() {
  return (
    <div className={styles["page-layout"]}>
      <PageHistory />
      <div className={styles.container}>
        <Outlet />
        <PageSidebar />
      </div>
    </div>
  );
}
