import clsx from 'clsx';
import styles from './nav.module.css';
import Logo from '../../Logo';
import Capsule from '../../Capsule';
import Hamburger from '../../Hamburger';
import { useState } from 'react';
import Notif from '../../Notif';
import Bag from '../../../assets/icons/bag.svg?react';
import Heart from '../../../assets/icons/heart.svg?react';
import SearchBar from '../../Filters/SearchBar';
import Search from '../../../assets/icons/search.svg?react';
import Phone from '../../Contact/Phone';
import Dots from '../../../assets/icons/dots.svg?react';
import Button from '../../Button/Button';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import User from '../../../assets/icons/user.svg?react';

const Navbar = () => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const [isSearchMenuOpened, setIsSearchMenuOpened] = useState(false);

  const user = {
    name: 'John',
  };

  const navLinks = [
    {
      id: 1,
      to: '/about',
      text: 'about',
    },
    {
      id: 2,
      to: '/shopping-and-payments',
      text: 'shopping and payment',
    },
    {
      id: 3,
      to: '/blog',
      text: 'blog',
    },
    {
      id: 4,
      to: '/sale',
      text: 'sale',
    },
  ];

  return (
    <nav className={clsx(styles.nav)}>
      {/* small nav */}
      <div
        className={clsx(
          'hide-on-mobile flex justify-between items-center',
          styles.nav__small
        )}
      >
        <NavLinks links={navLinks} direction="row" />
        {Object.keys(user).length > 0 ? (
          <Link
            to={'/account'}
            className={clsx(
              styles['nav__link'],
              styles['no-hover'],
              'flex items-center gap-xs'
            )}
          >
            <span>{user.name}</span>
            <User className={clsx('icon sm light')} />
          </Link>
        ) : (
          <NavLink to="/login" text="login" />
        )}
      </div>
      {/* big nav */}
      <div
        className={clsx(
          'flex items-center justify-between gap-sm',
          styles.nav__main
        )}
      >
        {/* left */}
        <div className={clsx('flex items-center gap-base', styles.left)}>
          {/* capsule */}
          <Capsule>
            <Hamburger
              isMobileNavOpened={isMobileNavOpened}
              setIsMobileNavOpened={setIsMobileNavOpened}
            />
            <Logo hideTextOnMobile={true} />
          </Capsule>
          <Button
            withIcon={true}
            text="Catalog"
            isLink={false}
            type="light"
            hideOnMobile={true}
          >
            <Dots className={clsx('icon md green-400')} />
          </Button>
          {/* search bar */}
          <SearchBar showOnBigMobile={true} />
          {/* search menu btn */}
          <button
            onClick={() => setIsSearchMenuOpened(true)}
            className={clsx('hide-on-big-mobile')}
          >
            <Search className={clsx('icon md')} />
          </button>
          <Phone text="(808) 555-1111" hideOnMobile={true} />
        </div>
        {/* right */}
        <div className={clsx('flex items-center gap-sm')}>
          <Notif total={13} isLink={true} to="/favourites" hideOnMobile={true}>
            <Heart className={clsx('icon sm light')} />
          </Notif>
          <Notif total={10} isLink={false}>
            <Bag className={clsx('icon sm')} />
          </Notif>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
