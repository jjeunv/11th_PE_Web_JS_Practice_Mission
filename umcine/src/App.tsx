import MovieCard from "./components/MovieCard";

function Header() {
  return <header>헤더</header>;
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h1>영화 목록</h1>
        <MovieCard
          title="오디세이"
          releaseDate="2026.08.05"
          isBookmarked={true}
        />
        <MovieCard
          title="토이 스토리 5"
          releaseDate="2026.06.17"
          isBookmarked={false}
        />
        <MovieCard
          title="타짜: 벨제붑의 노래"
          releaseDate="2026.09.23"
          isBookmarked={false}
        />
      </main>
    </>
  );
}
