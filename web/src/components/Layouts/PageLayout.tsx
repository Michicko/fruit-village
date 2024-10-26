import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css";
import PageHistory from "../PageHistory/PageHistory";
import RightSidebar from "./RightSidebar";
import PersonalPageLayout from "./PersonalPageLayout";
import PersonalPageProvider from "../../providers/PersonalPageProvider";

interface PageLayoutPropsTypes {
  noRightSidebar?: boolean;
}

export default function PageLayout({ noRightSidebar }: PageLayoutPropsTypes) {
  return (
    <div className={"page-layout"}>
      <PageHistory />
      <div
        className={`${styles.container} ${
          noRightSidebar && styles["no--right-siderbar"]
        } ${noRightSidebar && styles["with-ls"]}`}
      >
        {noRightSidebar ? (
          <>
            <PersonalPageProvider>
              <PersonalPageLayout>
                <Outlet />
              </PersonalPageLayout>
            </PersonalPageProvider>
          </>
        ) : (
          <>
            <Outlet />
            <RightSidebar />
          </>
        )}
      </div>
    </div>
  );
}
