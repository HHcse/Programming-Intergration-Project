import React from "react";
import BookList from "./components/BookList";

export default function App() {
  return (
    <div>
      <header style={{ background: "white", borderBottom: "1px solid #eee" }}>
        <div className="container">
          <h1>HCMC Student Bookstore</h1>
          <nav>Home • Books • Login</nav>
        </div>
      </header>

      <main className="container">
        <section>
          <h2 style={{ marginTop: 24 }}>Popular books</h2>
          <BookList />
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} HCMC Student Bookstore — Demo Frontend</p>
        </div>
      </footer>
    </div>
  );
}
