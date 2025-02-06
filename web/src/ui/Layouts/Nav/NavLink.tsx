import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./nav.module.css";
import { ILink } from "../../../lib/definitions";

const NavLink = ({ to, text }: ILink) => {
  return (
    <Link to={to} className={clsx(styles.nav__link)}>
      {text}
    </Link>
  );
};

export default NavLink;
