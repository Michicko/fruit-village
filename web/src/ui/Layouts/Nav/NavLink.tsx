import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './nav.module.css';
import { ILink } from '../../../lib/definitions';

const NavLink = ({ to, text, children, withIcon, handleOnClick }: ILink) => {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;

  return (
    <Link
      to={to}
      className={clsx(styles.nav__link, {
        [styles['with-icon']]: withIcon,
        [styles.active]: pathname === to,
      })}
      onClick={handleOnClick && handleOnClick}
    >
      {children && children}
      {text}
    </Link>
  );
};

export default NavLink;
