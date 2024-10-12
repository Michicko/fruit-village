import NavMain from "./NavMain";
import NavSmall from "./NavSmall";
import styles from "./Nav.module.css";
import NavMobile from "./NavMobile";
import { useState } from "react";

export default function Nav() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpened(!isMobileNavOpened);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpened(false);
  };

  return (
    <nav className={styles.nav}>
      <NavSmall />
      <NavMain
        isMobileNavOpened={isMobileNavOpened}
        toggleMobileNav={toggleMobileNav}
        showTextSmallScreen={false}
        showButton={true}
      />
      <NavMobile
        isMobileNavOpened={isMobileNavOpened}
        closeMobileNav={closeMobileNav}
      />
    </nav>
  );
}
