import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopPropsTypes {
  children: React.ReactNode;
}

export default function ScrollToTop({ children }: ScrollToTopPropsTypes) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
    });
  }, [pathname]);

  return children || null;
}
