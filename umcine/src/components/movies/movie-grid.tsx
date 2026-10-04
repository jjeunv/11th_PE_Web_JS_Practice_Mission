import type { Movie } from "../../types/movie";
import MovieCard from "./movie-card";

interface MovieGridProps {
  movies: Movie[];
  onToggleBookmark: (movieId: number) => void;
}

const MovieGrid = ({ movies, onToggleBookmark }: MovieGridProps) => {
  return (
    <div className="grid grid-cols-5 gap-y-5 gap-x-4.5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 pb-5.25">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
