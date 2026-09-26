import type { Movie } from "../../types/movie";
import MovieCard from "../movie-card/movie-card";
import Pagination from "../pagination/pagination";
import styles from "./movie-grid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onToggleBookmark: (movieId: number) => void;
}

const MovieGrid = ({ movies, onToggleBookmark }: MovieGridProps) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>영화 목록</h1>

      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>

      <Pagination />
    </main>
  );
};

export default MovieGrid;
