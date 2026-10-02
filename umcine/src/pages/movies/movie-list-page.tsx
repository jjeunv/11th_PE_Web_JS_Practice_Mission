import { useState } from "react";
import { movies as initialMovies } from "../../data/movie";
import MovieGrid from "../../components/movies/movie-grid/movie-grid";

export const MovieListPage = () => {
  const [movies, setMovies] = useState(initialMovies);

  const handleToggleBookmark = (movieId: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  };

  return (
    <>
      <MovieGrid movies={movies} onToggleBookmark={handleToggleBookmark} />
    </>
  );
};
