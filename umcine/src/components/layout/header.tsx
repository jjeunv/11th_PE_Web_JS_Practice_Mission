import { useState } from "react";
import { cn } from "../../utils/cn";
import { MovieIcon, SearchIcon } from "../../assets";

const NAV_ITEMS = ["영화", "검색", "내 정보"];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("영화");

  return (
    <header className="flex justify-between items-center h-22.75 border-b border-b-line px-20 py-6 bg-white">
      <div className="flex justify-between gap-10.5">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 flex items-center justify-center border-2 border-primary rounded-lg">
            <MovieIcon className="text-black" aria-label="로고" />
          </div>

          <span className="font-black text-[20px] text-primary">UMCine</span>
        </a>
        <nav className="flex items-center gap-7.5">
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className={cn(
                "font-bold text-[14px] text-secondary cursor-pointer",
                item === activeMenu &&
                  "text-primary underline underline-offset-2 decoration-[1.5px]",
              )}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex gap-2.5">
        <button className="cursor-pointer flex items-center justify-center w-10.5 h-10.5  border border-line rounded-lg bg-white">
          <SearchIcon className="size-6 text-secondary" aria-label="검색" />
        </button>
        <button className="h-10.5 border px-4 border-white rounded-lg bg-action text-white font-extrabold text-[14px]">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
