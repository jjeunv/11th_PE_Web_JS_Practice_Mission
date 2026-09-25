import { useState } from "react";
import MovieCard from "./components/MovieCard";

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  isBookmarked: boolean;
}

const initialMovies: Movie[] = [
  {
    id: 1,
    title: "오디세이",
    releaseDate: "2026.08.05",
    isBookmarked: true,
  },
  {
    id: 2,
    title: "토이 스토리 5",
    releaseDate: "2026.06.17",
    isBookmarked: false,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleToggleBookmark(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  }

  return (
    <main>
      <h1>영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} onToggleBookmark={handleToggleBookmark} />
          </li>
        ))}
      </ul>
    </main>
  );
}
