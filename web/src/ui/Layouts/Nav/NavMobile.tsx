import clsx from 'clsx';
import { generalLinks } from '../../../lib/placeholder-data';
import Capsule from '../../Capsule';
import Logo from '../../Logo';
import Close from '../../../assets/icons/close.svg?react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import User from '../../../assets/icons/user.svg?react';
import Logout from '../../../assets/icons/logout.svg?react';
import Button from '../../Button/Button';
import Dots from '../../../assets/icons/dots.svg?react';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import UserOutline from '../../../assets/icons/user-outline.svg?react';
import Orders from '../../../assets/icons/orders.svg?react';
import Eye from '../../../assets/icons/eye.svg?react';
import Clock from '../../../assets/icons/clock.svg?react';
import Gift from '../../../assets/icons/gift.svg?react';
import HeartOutline from '../../../assets/icons/heart-outline.svg?react';

const NavMobile = ({
  isMobileNavOpened,
  setIsMobileNavOpened,
}: {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = {
    name: 'John',
  };

  const closeMobileNav = () => {
    setIsMobileNavOpened(false);
  };

  return (
    <div
      className={clsx(styles.nav__mobile, {
        [styles.open]: isMobileNavOpened,
      })}
    >
      <div className={clsx(styles['nav__mobile-box'])}>
        {/* header */}
        <div
          className={clsx(
            'flex items-center justify-between',
            styles['nav__mobile-header']
          )}
        >
          <Capsule>
            <Logo showTextOnSmallMobile={true} handleOnClick={closeMobileNav} />
          </Capsule>
          <button onClick={() => setIsMobileNavOpened(false)}>
            <Close className={clsx('icon sm stroke light')} />
          </button>
        </div>
        {/* auth */}
        <div
          className={clsx(
            styles['nav__mobile-auth'],
            'flex items-center justify-between'
          )}
        >
          <Link
            to={'/account'}
            className={clsx(
              styles['nav__link'],
              styles['no-hover'],
              styles['dark'],
              'flex items-center gap-xs'
            )}
            onClick={closeMobileNav}
          >
            <User className={clsx('icon sm dark')} />
            <span>Hi, {user.name}</span>
          </Link>
          <button className={clsx('flex items-center')}>
            <Logout className={clsx('icon sm green-400')} />
          </button>
        </div>
        <div
          className={clsx('flex col gap-sm', styles['nav__mobile-links-box'])}
        >
          <Button
            withIcon={true}
            text="Catalog"
            isLink={false}
            type="light"
            hideOnMobile={false}
          >
            <Dots className={clsx('icon md green-400')} />
          </Button>
          <div className={clsx('flex col gap-md')}>
            <NavLink
              to="/account"
              text="My account"
              withIcon={true}
              handleOnClick={closeMobileNav}
            >
              <UserOutline
                className={clsx('icon sm stroke-light', styles.stroke)}
              />
            </NavLink>
            <NavLink
              to="/orders"
              text="My orders"
              withIcon={true}
              handleOnClick={closeMobileNav}
            >
              <Orders className={clsx('icon sm path light', styles.path)} />
            </NavLink>
            <div className={clsx('flex items-center justify-between')}>
              <NavLink
                to="/wishlist"
                text="wishlist"
                withIcon={true}
                handleOnClick={closeMobileNav}
              >
                <HeartOutline
                  className={clsx('icon sm stroke-light', styles.stroke)}
                />
              </NavLink>
              <span
                className={clsx(
                  styles.total,
                  'flex items-center justify-center'
                )}
              >
                4
              </span>
            </div>
            <div className={clsx('flex items-center justify-between')}>
              <NavLink
                to="/waitlist"
                text="waitlist"
                withIcon={true}
                handleOnClick={closeMobileNav}
              >
                <Clock
                  className={clsx('icon sm stroke-light', styles.stroke)}
                />
              </NavLink>
              <span
                className={clsx(
                  styles.total,
                  'flex items-center justify-center'
                )}
              >
                6
              </span>
            </div>
            <NavLink
              to="/viewed-products"
              text="My viewed products"
              withIcon={true}
              handleOnClick={closeMobileNav}
            >
              <Eye className={clsx('icon sm path light', styles.path)} />
            </NavLink>
            <NavLink
              to="/bonuses"
              text="My bonuses"
              withIcon={true}
              handleOnClick={closeMobileNav}
            >
              <Gift className={clsx('icon sm path light', styles.path)} />
            </NavLink>
          </div>
          <NavLinks
            links={generalLinks}
            direction="col"
            gap="md"
            handleOnClick={closeMobileNav}
          />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
