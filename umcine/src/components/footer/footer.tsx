import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img
          src="/images/logos/tmdb-logo.svg"
          alt="TMDB 로고"
          className={styles.logo}
        />
        <p className={styles.text}>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
