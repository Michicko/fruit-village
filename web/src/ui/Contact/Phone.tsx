import clsx from 'clsx';
import PhoneIcon from '../../assets/icons/phone.svg?react';
import styles from './contact.module.css';

const Phone = ({
  text,
  hideOnMobile,
}: {
  text: string;
  hideOnMobile: boolean;
}) => {
  return (
    <a
      href={`tel:${text}`}
      className={clsx('flex items-end gap-sm', styles.phone, {
        ['hide-on-mobile']: hideOnMobile,
      })}
    >
      <PhoneIcon className={clsx('icon sm light')} />
      <span>{text}</span>
    </a>
  );
};

export default Phone;
