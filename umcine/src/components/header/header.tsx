import { useState } from "react";
import styles from "./header.module.css";

const NAV_ITEMS = ["영화", "검색", "내 정보"];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("영화");

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <a href="/" className={styles.logoBox}>
          <div className={styles.logoIconBox}>
            <img src="/icons/movie.svg" alt="로고" />
          </div>

          <span className={styles.logoText}>UMCine</span>
        </a>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className={item === activeMenu ? styles.active : ""}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.searchButton}>
          <img src="/icons/search.svg" alt="검색" />
        </button>
        <button className={styles.authButton}>로그인</button>
      </div>
    </header>
  );
};

export default Header;
