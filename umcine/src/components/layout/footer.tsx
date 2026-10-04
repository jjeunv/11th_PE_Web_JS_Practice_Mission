const Footer = () => {
  return (
    <footer className="h-14.25 px-20 bg-white border-t border-t-line flex justify-end">
      <div className="flex items-center justify-between gap-2">
        <img
          src="/images/logos/tmdb-logo.svg"
          alt="TMDB 로고"
          className="h-2"
        />
        <p className="font-normal text-[12px] text-secondary ">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
