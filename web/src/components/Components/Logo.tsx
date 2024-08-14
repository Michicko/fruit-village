import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="logo">
      <img src="/logo.png" alt="fruit village icon" className="logo__img" />
      <span>FruitVillage</span>
    </Link>
  );
}
