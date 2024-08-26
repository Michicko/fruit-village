import Logo from "../Components/Logo";
import CancelIcon from "../../assets/icons/cancel.svg?react";
import UserFilledIcon from "../../assets/icons/user-dark.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import PlusSquare from "../../assets/icons/plus-square.svg?react";
import PhoneIcon from "../../assets/icons/phone-dark.svg?react";
import PhoneStrokeIcon from "../../assets/icons/phone-light.svg?react";
import { Link } from "react-router-dom";
import { user } from "../../data";
import { useEffect, useRef, useState } from "react";
import Grid from "../../assets/icons/grid-4.svg?react";
import PrivateLinks from "../Components/PrivateLinks";
import PublicLinks from "../Components/PublicLinks";

type MobileNavProps = {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCatalogMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({
  isMobileNavOpened,
  setIsMobileNavOpened,
  setIsCatalogMenuOpened,
}: MobileNavProps) {
  const closeMobileNav = () => {
    setIsMobileNavOpened(false);
  };

  const genLinksRef = useRef<HTMLDivElement | null>(null);

  const [isPublicLinkOpened, setIsPublicLinkOpened] = useState(false);

  const togglePublicLink = () => {
    const genLink = genLinksRef.current;
    if (genLink) {
      if (isPublicLinkOpened) {
        genLink.style.height = "0px";
      } else {
        genLink.style.height = `${genLink.scrollHeight}px`;
      }
    }
    setIsPublicLinkOpened(!isPublicLinkOpened);
  };

  const openCatalogMenu = () => {
    closeMobileNav();
    setIsCatalogMenuOpened(true);
  };

  useEffect(() => {
    if (isMobileNavOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileNavOpened]);

  useEffect(() => {
    const reset = () => {
      const screenSize = window.innerWidth;
      if (screenSize >= 1024) {
        if (!isMobileNavOpened) {
          return;
        }
        setIsMobileNavOpened(false);
      }
    };

    window.addEventListener("resize", reset);

    return () => window.removeEventListener("resize", reset);
  }, [isMobileNavOpened, setIsMobileNavOpened]);

  // const user = null;

  return (
    <div className={isMobileNavOpened ? "nav__mobile isOpened" : "nav__mobile"}>
      <div className="nav__mobile-container">
        <div className="nav__mobile-header">
          <div>
            <div className="nav__logo-box">
              <Logo hideSm={false} cb={closeMobileNav} />
            </div>
            <button className="nav__mobile-btn" onClick={closeMobileNav}>
              <CancelIcon className="icon icon--light" />
            </button>
          </div>
          <div className="nav__mobile-auth">
            {user ? (
              <>
                <Link
                  className="nav__mobile-auth-btn"
                  to={"/account"}
                  onClick={closeMobileNav}
                >
                  <UserFilledIcon className="icon icon--dark" />
                  <span>Hi, {user?.first_name}</span>
                </Link>
                <button className="nav__mobile-btn">
                  <LogoutIcon className="icon icon--primary" />
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="nav__link b dark"
                onClick={closeMobileNav}
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="nav__mobile-content">
          <button
            className="btn btn--light btn--flex"
            onClick={openCatalogMenu}
          >
            <Grid className="btn__icon" />
            <span>Catalog</span>
          </button>
          <div className="nav__mobile-list">
            {user && (
              <div className="nav__mobile-sidebar-links">
                <PrivateLinks theme="light" cb={closeMobileNav} />
              </div>
            )}
            {user && (
              <div
                className={
                  isPublicLinkOpened
                    ? `nav__mobile-sidebar-links-ctrl isOpened`
                    : `nav__mobile-sidebar-links-ctrl`
                }
                onClick={togglePublicLink}
              >
                <button className="nav__mobile-btn">
                  <PlusSquare className="icon icon--sm icon--light path-filled" />
                  <span className="light">More</span>
                </button>
                <ArrowDown className="icon icon--xs icon--light arrow path-filled" />
              </div>
            )}
            <div
              className={
                !user
                  ? `nav__mobile-sidebar-links-gen no-user`
                  : `nav__mobile-sidebar-links-gen`
              }
              ref={genLinksRef}
            >
              <div className="nav__mobile-sidebar-links">
                <PublicLinks size="mobile" cb={closeMobileNav} />
              </div>
            </div>
          </div>
          <div className="nav__mobile-phonenums-box">
            <PhoneIcon className="icon icon--light" />
            <div className="nav__mobile-phonenums">
              <a href="tel:+1 (808) 555-0111" className="nav__mobile-phonenum">
                (808) 555-0111
              </a>
              <a href="tel:+1 (808) 555-0222" className="nav__mobile-phonenum">
                (808) 555-0222
              </a>
            </div>
          </div>
          <div className="nav__mobile-btn-box">
            <button className="btn btn--light">
              <PhoneStrokeIcon className="icon icon--primary" />
              <span>Request a call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
