import NavLink from './NavLink';
import clsx from 'clsx';
import styles from './nav.module.css';
import { ILink } from '../../../lib/definitions';

const NavLinks = ({
  links,
  direction,
}: {
  links: ILink[];
  direction: 'row' | 'col';
}) => {
  return (
    <div className={clsx('flex gap-xl', direction, clsx(styles.nav__links))}>
      {links.map((link) => {
        return <NavLink to={link.to} text={link.text} key={link.id} />;
      })}
    </div>
  );
};

export default NavLinks;
