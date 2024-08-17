import { Link } from "react-router-dom";
type LogoProps = {
  hideSm: boolean;
};
export default function Logo({ hideSm }: LogoProps) {
  return (
    <Link to={"/"} className={hideSm ? "logo hide-sm" : "logo"}>
      <img src="/logo.png" alt="fruit village icon" className="logo__img" />
      <span>FruitVillage</span>
    </Link>
  );
}
