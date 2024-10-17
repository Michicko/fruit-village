import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

interface PaginationProps {
  handlePageClick: () => void;
  pageCount: number;
}

export default function Pagination({
  handlePageClick,
  pageCount,
}: PaginationProps) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <ArrowRight
          className={`${styles.icon} ${styles["path-filled"]} icon lg`}
        />
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel={
        <ArrowLeft
          className={`${styles.icon} ${styles["stroke-filled"]} icon lg`}
        />
      }
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageClassName={styles["page-btn"]}
      activeClassName={styles["current-page-btn"]}
      disabledClassName={`${styles["disabled-btn"]}`}
      nextLinkClassName={styles.link}
      previousLinkClassName={styles.link}
      breakLinkClassName={styles.ellips}
      marginPagesDisplayed={1}
    />
  );
}
