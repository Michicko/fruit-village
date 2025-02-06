import { Link } from 'react-router-dom';
import styles from './button.module.css';
import clsx from 'clsx';

const Button = ({
  isLink,
  text,
  to,
  type,
  hideOnMobile,
  withIcon,
  children,
}: {
  isLink: boolean;
  text: string;
  to?: string;
  hideOnMobile: boolean;
  type: 'primary' | 'light';
  withIcon: boolean;
  children?: React.ReactNode;
}) => {
  return isLink ? (
    <Link
      to={to || ''}
      className={clsx('flex items-center', styles.btn, styles[type], {
        [styles['with-icon']]: withIcon,
        ['hide-on-mobile']: hideOnMobile,
      })}
    >
      {withIcon && children}
      {text}
    </Link>
  ) : (
    <button
      className={clsx('flex items-center', styles.btn, styles[type], {
        [styles['with-icon']]: withIcon,
        ['hide-on-mobile']: hideOnMobile,
      })}
    >
      {withIcon && children}
      {text}
    </button>
  );
};

export default Button;
