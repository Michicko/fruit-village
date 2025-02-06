import Menu from '../assets/icons/menu.svg?react';
import Close from '../assets/icons/close.svg?react';
import clsx from 'clsx';
import styles from './ui.module.css';

const Hamburger = ({
  isMobileNavOpened,
  setIsMobileNavOpened,
}: {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className={clsx(
        styles.hamburger,
        'hide-on-tab',
        'flex items-center justofy-center'
      )}
      onClick={() => setIsMobileNavOpened(!isMobileNavOpened)}
    >
      {isMobileNavOpened ? (
        <Close className={clsx('icon sm stroke green-400')} />
      ) : (
        <Menu className={clsx('icon lg stroke green-400')} />
      )}
    </button>
  );
};

export default Hamburger;
