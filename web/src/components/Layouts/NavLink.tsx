import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

interface NavLinkPropsTypes {
  link: {
    id: string;
    url: string;
    name: string;
  };
  onClick?: () => void;
}

export default function NavLink({ link, onClick }: NavLinkPropsTypes) {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  return (
    <Link
      to={link.url}
      className={`${styles["nav-link"]} ${
        link.url === pathname ? styles.current : ""
      }`}
      key={link.id}
      onClick={onClick}
    >
      {link.name}
    </Link>
  );
}
