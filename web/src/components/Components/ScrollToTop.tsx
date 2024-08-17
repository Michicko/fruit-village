import { useEffect } from "react";

type ScrollToTopProps = {
  pathname: string;
};

export default function ScrollToTop({ pathname }: ScrollToTopProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
