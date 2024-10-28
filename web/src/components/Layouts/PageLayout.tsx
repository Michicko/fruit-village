import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css";
import PageHistory from "../PageHistory/PageHistory";
import RightSidebar from "./RightSidebar";
import PersonalPageLayout from "./PersonalPageLayout";
import PersonalPageProvider from "../../providers/PersonalPageProvider";

interface PageLayoutPropsTypes {
  noSidebars?: boolean;
  withRightSidebar?: boolean;
  withLeftSidebar?: boolean;
}

export default function PageLayout({
  noSidebars,
  withRightSidebar,
  withLeftSidebar,
}: PageLayoutPropsTypes) {
  return (
    <div className={"page-layout"}>
      <PageHistory />
      <div
        className={`${styles.container} ${
          noSidebars ? styles["no-siderbars"] : ""
        } ${withLeftSidebar ? styles["with-ls"] : ""} ${
          withRightSidebar ? styles["with-rs"] : ""
        }`}
      >
        {withLeftSidebar ? (
          <>
            <PersonalPageProvider>
              <PersonalPageLayout>
                <Outlet />
              </PersonalPageLayout>
            </PersonalPageProvider>
          </>
        ) : withRightSidebar ? (
          <>
            <Outlet />
            <RightSidebar />
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
