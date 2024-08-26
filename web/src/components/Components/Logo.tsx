import { Link } from "react-router-dom";
type LogoProps = {
  hideSm: boolean;
  cb?: () => void;
};
export default function Logo({ hideSm, cb }: LogoProps) {
  return (
    <Link to={"/"} className={hideSm ? "logo hide-sm" : "logo"} onClick={cb}>
      <img src="/logo.png" alt="fruit village icon" className="logo__img" />
      <span>FruitVillage</span>
    </Link>
  );
}
