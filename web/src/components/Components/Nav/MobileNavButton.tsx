
import Menu from "../../../assets/icons/menu.svg?react";
import Close from "../../../assets/icons/close.svg?react";

type MobileNavButtonProps = {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavButton({
  isMobileNavOpened,
  setIsMobileNavOpened,
}: MobileNavButtonProps) {
  
  const toggleMobileNav = () => {
    setIsMobileNavOpened(!isMobileNavOpened);
  };

  return (
    <button className="nav__btn" onClick={toggleMobileNav}>
      {isMobileNavOpened ? (
        <Close className="nav__btn-icon" />
      ) : (
        <Menu className="nav__btn-icon" />
      )}
    </button>
  );
}
