import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <ScrollToTop>
      <Nav />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
}
