import NavMain from "./NavMain";
import NavSmall from "./NavSmall";
import styles from "./Nav.module.css";
import NavMobile from "./NavMobile";
import { useState } from "react";
import CatalogDialogMenu from "../CatalogMenu/CatalogDialogMenu";
import Cart from "../Cart/Cart";

export default function Nav() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const [showCatalogModal, setShowCatalogModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpened(!isMobileNavOpened);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpened(false);
  };

  return (
    <>
      <CatalogDialogMenu
        showCatalogModal={showCatalogModal}
        setShowCatalogModal={setShowCatalogModal}
      />
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <nav className={styles.nav}>
        <NavSmall />
        <NavMain
          isMobileNavOpened={isMobileNavOpened}
          toggleMobileNav={toggleMobileNav}
          showTextSmallScreen={false}
          setShowCatalogModal={setShowCatalogModal}
          setShowCart={setShowCart}
          showButton={true}
        />
        <NavMobile
          isMobileNavOpened={isMobileNavOpened}
          closeMobileNav={closeMobileNav}
          setShowCatalogModal={setShowCatalogModal}
        />
      </nav>
    </>
  );
}
