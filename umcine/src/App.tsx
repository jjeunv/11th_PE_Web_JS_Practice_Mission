import { useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MovieGrid from "./components/movie-grid/movie-grid";
import { movies as initialMovies } from "./data/movie";

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
