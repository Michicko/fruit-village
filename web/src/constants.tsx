import { MouseEventHandler } from "react";

export interface NavLogoBoxProps {
  isMobileNavOpened?: boolean;
  showButton: boolean;
  toggleMobileNav?: MouseEventHandler<HTMLButtonElement>;
  showTextSmallScreen?: boolean;
}

export interface CarouselControllerProps {
  data: number[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}
