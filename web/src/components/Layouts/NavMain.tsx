import CatalogButton from "../CatalogButton/CatalogButton";
import CartButton from "../NotificationButton/CartButton";
import WishListButton from "../NotificationButton/WishListButton";
import Phone from "../Phone/Phone";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Nav.module.css";
import NavLogoBox from "./NavLogoBox";
import SearchDialogButton from "../SearchInput/SearchDialogButton";
import { NavLogoBoxProps } from "../../constants";

interface NavMainProps extends NavLogoBoxProps {
  setShowCatalogModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMain({
  toggleMobileNav,
  setShowCatalogModal,
  setShowCart
}: NavMainProps) {
  return (
    <div className={styles["nav-main"]}>
      <NavLogoBox showButton={true} toggleMobileNav={toggleMobileNav} />
      <CatalogButton
        fullWidth={false}
        onClickHandler={() => setShowCatalogModal(true)}
      />
      <SearchDialogButton />
      <SearchInput />
      <Phone text="(805) 555-0011" color="light" showOnSmallScreen={false} />
      <div className={styles.right}>
        <WishListButton />
        <CartButton  setShowCart={setShowCart} />
      </div>
    </div>
  );
}
