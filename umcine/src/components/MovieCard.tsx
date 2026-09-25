import type { Movie } from "../App";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

const MovieCard = ({ movie, onToggleBookmark }: MovieCardProps) => {
  return (
    <article>
      <span>{movie.title}</span>
      <button
        aria-pressed={movie.isBookmarked}
        onClick={() => onToggleBookmark(movie.id)}
      >
        {movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
      </button>
    </article>
  );
};

export default MovieCard;
