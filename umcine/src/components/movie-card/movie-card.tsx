import type { Movie } from "../../types/movie";
import styles from "./movie-card.module.css";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

const MovieCard = ({ movie, onToggleBookmark }: MovieCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.posterWrapper}>
        <img
          src={movie.posterPath}
          alt={movie.title}
          className={styles.poster}
        />
        <button
          type="button"
          className={`${styles.bookmarkBadge} ${
            movie.isBookmarked ? styles.bookmarked : ""
          }`}
          aria-pressed={movie.isBookmarked}
          aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            src={
              movie.isBookmarked
                ? "/icons/bookmark.svg"
                : "/icons/bookmark-outline.svg"
            }
            alt=""
            className={styles.bookmarkIcon}
          />
        </button>
      </div>
      <span className={styles.title}>{movie.title}</span>
      <span className={styles.date}>{movie.releaseDate}</span>
    </article>
  );
};

export default MovieCard;
