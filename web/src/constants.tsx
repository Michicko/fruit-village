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

export interface ProductProps {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  isFavorite: boolean;
  discount: number;
  stock: number;
  size?: number;
  measurement: string;
  slug: string;
  description?: string;
}
