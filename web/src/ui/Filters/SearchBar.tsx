import clsx from 'clsx';
import Search from '../../assets/icons/search.svg?react';
import styles from './filters.module.css';

const SearchBar = ({ showOnBigMobile }: { showOnBigMobile: boolean }) => {
  return (
    <div
      className={clsx('flex items-center', styles['search-bar'], {
        ['show-on-big-mobile']: showOnBigMobile,
      })}
    >
      <Search className={clsx('icon md')} />
      <input type="search" name="search" id="search" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
