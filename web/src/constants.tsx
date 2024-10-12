import { MouseEventHandler } from "react";

export interface NavLogoBoxProps {
  isMobileNavOpened?: boolean;
  showButton: boolean;
  toggleMobileNav?: MouseEventHandler<HTMLButtonElement>;
  showTextSmallScreen?: boolean;
}
