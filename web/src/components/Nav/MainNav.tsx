import Logo from "../Components/Logo";
import { useRef, useState } from "react";
import MobileNavButton from "./MobileNavButton";
import Grid from "../../assets/icons/grid-4.svg?react";
import Like from "../../assets/icons/like-filled.svg?react";
import Bag from "../../assets/icons/bag.svg?react";
import Search from "../../assets/icons/search.svg?react";
import Phone from "../../assets/icons/phone-light.svg?react";
import { Link } from "react-router-dom";

type MainNavProps = {
  isCatalogMenuOpened: boolean;
  setIsCatalogMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MainNav({
  isCatalogMenuOpened,
  setIsCatalogMenuOpened,
}: MainNavProps) {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const [isSearchBarShown, setIsSearchBarShown] = useState(false);
  const searchRef = useRef(null);

  const showSearchBar = () => {
    setIsSearchBarShown(true);
    const searchInput = searchRef.current;
    console.log(searchInput);

    // searchInput.focus = true;
  };

  const hideSearchBar = () => {
    setIsSearchBarShown(false);
  };

  return (
    <div className="nav__main">
      <div className="nav__logo-box">
        <MobileNavButton
          isMobileNavOpened={isMobileNavOpened}
          setIsMobileNavOpened={setIsMobileNavOpened}
        />
        <Logo hideSm={true} />
      </div>
      <button
        className="btn btn--light btn--flex"
        onClick={() => setIsCatalogMenuOpened(true)}
      >
        <Grid className="btn__icon" />
        <span>Catalog</span>
      </button>
      <div className="form__group form__group--light">
        <Search className="form__icon" />
        <input
          type="search"
          name="search"
          id="search"
          className="form__input-text form__input-text--light"
          placeholder="Search"
          onBlur={hideSearchBar}
          ref={searchRef}
        />
      </div>
      <a href="tel:+18085550111" className="nav__tel">
        <Phone className="nav__icon" />
        <span>(808) 555-0111</span>
      </a>
      {/* <div className="nav__search-box">
        {isSearchBarShown ? (
          <div className="nav__search-box">
            <div className="form__group">
              <Search className="form__icon" />
              <input
                type="search"
                name="search"
                id="search"
                className="form__input-text"
                placeholder="Search"
                onBlur={hideSearchBar}
                ref={searchRef}
              />
            </div>
          </div>
        ) : (
          <button className="nav__search-btn" onClick={showSearchBar}>
            <Search className="nav__icon" />
          </button>
        )}
      </div> */}
      <div className="nav__end">
        <Link className="nav__end-btn" to={"/wishlist"}>
          <Like className="nav__end-icon" />
          <div className="nav__end-total">
            <span>3</span>
          </div>
        </Link>
        <button className="nav__end-btn">
          <Bag className="nav__end-icon" />
          <div className="nav__end-total">
            <span>2</span>
          </div>
        </button>
      </div>
    </div>
  );
}
