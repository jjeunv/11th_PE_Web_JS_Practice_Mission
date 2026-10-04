import { useState } from "react";
import { cn } from "../../utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets";

// TODO: 상수 교체
const PAGE_NUMBERS = [1, 2, 3, 4, 5];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <nav className="flex items-center justify-center gap-3">
      <button
        type="button"
        aria-label="이전 페이지"
        className="cursor-pointer"
        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
      >
        <ChevronLeftIcon
          className={cn(currentPage === 1 ? "text-disabled" : "text-secondary")}
        />
      </button>

      <div className="flex items-center gap-1">
        {PAGE_NUMBERS.map((page) => (
          <button
            key={page}
            type="button"
            className={cn(
              "w-9 h-9 border-none rounded-[7px] bg-transparent text-secondary font-bold text-[13px] cursor-pointer ",
              page === currentPage && "bg-primary text-white",
            )}
            aria-current={page === currentPage ? "page" : undefined}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="다음 페이지"
        className="cursor-pointer"
        onClick={() => setCurrentPage((page) => Math.min(5, page + 1))}
      >
        {/* TODO: 상수 5 교체 */}
        <ChevronRightIcon
          className={cn(currentPage === 5 ? "text-disabled" : "text-secondary")}
        />
      </button>
    </nav>
  );
};

export default Pagination;
