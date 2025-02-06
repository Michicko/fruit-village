import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './ui.module.css';

const getTotal = (total: number) => {
  return (
    <span className={clsx('flex items-center justify-center')}>{total}</span>
  );
};

const Notif = ({
  to,
  isLink,
  total,
  children,
  hideOnMobile,
}: {
  to?: string;
  isLink: boolean;
  total: number;
  children: React.ReactNode;
  hideOnMobile?: boolean;
}) => {
  return isLink ? (
    <Link
      to={to || ''}
      className={clsx(styles.notif, {
        [styles['hide-on-mobile']]: hideOnMobile,
      })}
    >
      {children}
      {getTotal(total)}
    </Link>
  ) : (
    <button
      className={clsx(styles.notif, {
        [styles['hide-on-mobile']]: hideOnMobile,
      })}
    >
      {children}
      {getTotal(total)}
    </button>
  );
};

export default Notif;
