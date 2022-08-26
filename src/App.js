import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Home, About, Blog, Contact, Notfound } from "./Pages";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
