import { Link } from "@tanstack/react-router";
import type { Movie } from "../../../types/movie";
import { cn } from "../../../utils/cn";

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
              "absolute top-2.5 right-[9.8px] w-8.5 h-8.5 bg-[#17191e] flex justify-center items-center rounded-lg p-1 border border-[#ffffff] cursor-pointer",
              movie.isBookmarked && "bg-[#2563eb] border-[#2563eb]",
            )}
            aria-pressed={movie.isBookmarked}
            aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
            onClick={(e) => {
              e.preventDefault();
              onToggleBookmark(movie.id);
            }}
          >
            <img
              src={
                movie.isBookmarked
                  ? "/icons/bookmark.svg"
                  : "/icons/bookmark-outline.svg"
              }
              alt=""
              className="brightness-0 invert w-6"
            />
          </button>
        </div>
        <span className="mt-1.25 text-[#17191e] text-[14px] font-extrabold">
          {movie.title}
        </span>
        <span className="text-[12px] text-[#969da8] font-normal">
          {movie.releaseDate}
        </span>
      </article>
    </Link>
  );
};

export default MovieCard;
