import { useState } from "react";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { movies as initialMovies } from "./data/movie";
import MovieGrid from "./components/movies/movie-grid";

const App = () => {
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
      <Header />
      <MovieGrid movies={movies} onToggleBookmark={handleToggleBookmark} />
      <Footer />
    </>
  );
};

export default App;
