import History from "../Components/History";
import PersonalPageSidebar from "../Components/PersonalPageSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { privateLinks } from "../../data";


export default function PersonalLayout() {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  const currentLink = privateLinks.find((el) => {
    if (pathname.startsWith(el.link)) {
      return el;
    }
  });

  return (
    <main className="main">
      <History
        history={[
          {
            name: currentLink?.name,
            link: pathname,
          },
        ]}
      />
      <div className="personal-layout">
        <h1 className="heading heading--primary heading--page">
          <span>Personal account</span>
        </h1>
        <div className="personal-layout__container grid col-min-auto gap-4">
          <PersonalPageSidebar />
          <Outlet />
        </div>
      </div>
    </main>
  );
}
