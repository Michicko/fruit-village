import usePersonalPageContext from "../../hooks/usePersonalPageContext";
import LeftSidebar from "./LeftSidebar";

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
      <LeftSidebar />
      <main className="main">{children}</main>
    </>
  );
}
