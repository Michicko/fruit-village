import CatalogButton from "../CatalogButton/CatalogButton";
import CartButton from "../NotificationButton/CartButton";
import WishListButton from "../NotificationButton/WishListButton";
import Phone from "../Phone/Phone";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Nav.module.css";
import NavLogoBox from "./NavLogoBox";
import SearchDialogButton from "../SearchInput/SearchDialogButton";
import { NavLogoBoxProps } from "../../constants";

export default function NavMain({ toggleMobileNav }: NavLogoBoxProps) {
  return (
    <div className={styles["nav-main"]}>
      <NavLogoBox showButton={true} toggleMobileNav={toggleMobileNav} />
      <CatalogButton fullWidth={false} />
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
