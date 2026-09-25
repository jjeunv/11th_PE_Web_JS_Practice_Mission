function Header() {
  return <header>헤더</header>;
}

function MovieTitle() {
  return <h2>오디세이</h2>;
}

function MovieCard() {
  return (
    <article>
      <MovieTitle />
      <p>2026.08.05</p>
    </article>
  );
}

function MovieList() {
  return (
    <>
      <MovieCard />
      <MovieCard />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h1>영화 목록</h1>
        <MovieList />
      </main>
    </>
  );
}

/*
App
├─ Header
└─ MovieList
    ├─ MovieCard
    └─ MovieCard
*/
