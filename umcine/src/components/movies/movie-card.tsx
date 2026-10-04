import { Link } from "@tanstack/react-router";
import type { Movie } from "../../types/movie";
import { cn } from "../../utils/cn";
import { BookmarkIcon, BookmarkOutlineIcon } from "../../assets";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
}

const MovieCard = ({ movie, onToggleBookmark }: MovieCardProps) => {
  return (
    <Link to="/movies/$movieId" params={{ movieId: String(movie.id) }}>
      <article className="flex flex-col gap-1">
        <div className="relative">
          <img
            src={movie.posterPath}
            alt={movie.title}
            className="w-full object-cover rounded-[10px] aspect-[241.6/274]"
          />
          <button
            type="button"
            className={cn(
              "absolute top-2.5 right-[9.8px] w-8.5 h-8.5 bg-primary flex justify-center items-center rounded-lg p-1 border border-surface cursor-pointer",
              movie.isBookmarked && "bg-action border-action",
            )}
            aria-pressed={movie.isBookmarked}
            aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
            onClick={(e) => {
              e.preventDefault();
              onToggleBookmark(movie.id);
            }}
          >
            {movie.isBookmarked ? (
              <BookmarkIcon className="w-6 text-white" />
            ) : (
              <BookmarkOutlineIcon className="w-6 text-white" />
            )}
          </button>
        </div>
        <span className="mt-1.25 text-primary text-[14px] font-extrabold">
          {movie.title}
        </span>
        <span className="text-[12px] text-tertiary font-normal">
          {movie.releaseDate}
        </span>
      </article>
    </Link>
  );
};

export default MovieCard;
