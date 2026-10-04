import { useState } from "react";
import { movies as initialMovies } from "../../data/movie";
import MovieGrid from "../../components/movies/movie-grid";
import Pagination from "../../components/movies/pagination";

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
    <main className="flex flex-col gap-5 px-20 pt-6 pb-13.5 bg-page">
      <h1 className="text-[38px] text-primary font-bold">영화 목록</h1>
      <MovieGrid movies={movies} onToggleBookmark={handleToggleBookmark} />
      <Pagination />
    </main>
  );
};
