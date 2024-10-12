import CatalogButton from "../CatalogButton/CatalogButton";
import CartButton from "../NotificationButton/CartButton";
import WishListButton from "../NotificationButton/WishListButton";
import Phone from "../Phone/Phone";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Nav.module.css";
import { useState } from "react";
import NavLogoBox from "./NavLogoBox";
import SearchDialogButton from "../SearchInput/SearchDialogButton";

export default function NavMain() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    <div className={styles["nav-main"]}>
      <NavLogoBox
        isMobileNavOpened={isMobileNavOpened}
        setIsMobileNavOpened={setIsMobileNavOpened}
      />
      <CatalogButton />
      <SearchDialogButton />
      <SearchInput />
      <Phone />
      <div className={styles.right}>
        <WishListButton />
        <CartButton />
      </div>
    </div>
  );
}
