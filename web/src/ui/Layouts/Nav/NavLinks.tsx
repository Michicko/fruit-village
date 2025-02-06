import NavLink from './NavLink';
import clsx from 'clsx';
import styles from './nav.module.css';
import { ILink } from '../../../lib/definitions';

const NavLinks = ({
  links,
  direction,
  gap,
  handleOnClick,
}: {
  links: ILink[];
  direction: 'row' | 'col';
  gap: string;
  handleOnClick?: () => void;
}) => {
  return (
    <div
      className={clsx('flex', `gap-${gap}`, direction, clsx(styles.nav__links))}
    >
      {links.map((link) => {
        return (
          <NavLink
            to={link.to}
            text={link.text}
            key={link.id}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};

export default NavLinks;
