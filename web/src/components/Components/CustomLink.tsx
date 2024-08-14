import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

type LinkProps = {
  type: string;
  to: string;
  text: string;
};

export default function CustomLink({ type, to, text }: LinkProps) {
  return (
    <Link to={to} className={`link link--${type}`}>
      <span>{text}</span>
      <ArrowRight className="link__icon" />
    </Link>
  );
}
