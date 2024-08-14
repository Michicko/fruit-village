import { HeaderSlideProps } from "../../constants";
import HeaderSlider from "../Sliders/HeaderSlider";

type HeaderProps = {
  slides: HeaderSlideProps[];
};

export default function Header({ slides }: HeaderProps) {
  return (
    <div className="header">
      <HeaderSlider slides={slides} />
    </div>
  );
}
