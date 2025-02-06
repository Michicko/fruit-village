import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './ui.module.css';

const Logo = ({
  showTextOnSmallMobile,
  handleOnClick,
}: {
  showTextOnSmallMobile: boolean;
  handleOnClick?: () => void;
}) => {
  return (
    <Link
      to={'/'}
      className={clsx(styles.logo)}
      onClick={handleOnClick && handleOnClick}
    >
      <img src="/logo.png" alt="Fruit village logo" />
      <span
        className={clsx({
          ['show-on-small-mobile']: showTextOnSmallMobile,
        })}
      >
        FruitVillage
      </span>
    </Link>
  );
};

export default Logo;
