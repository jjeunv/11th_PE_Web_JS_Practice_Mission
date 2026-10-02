import { useState } from "react";
import styles from "./pagination.module.css";

const PAGE_NUMBERS = [1, 2, 3, 4, 5];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <nav className={styles.pagination}>
      <button
        type="button"
        className={styles.arrowButton}
        aria-label="이전 페이지"
        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
      >
        <img src="/icons/chevron-left.svg" alt="이전 페이지" />
      </button>

      <div className={styles.pageNumbers}>
        {PAGE_NUMBERS.map((page) => (
          <button
            key={page}
            type="button"
            className={`${styles.pageButton} ${
              page === currentPage ? styles.active : ""
            }`}
            aria-current={page === currentPage ? "page" : undefined}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={styles.arrowButton}
        aria-label="다음 페이지"
        onClick={() => setCurrentPage((page) => Math.min(5, page + 1))}
      >
        <img src="/icons/chevron-right.svg" alt="다음 페이지" />
      </button>
    </nav>
  );
};

export default Pagination;
