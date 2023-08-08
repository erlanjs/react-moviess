import "./App.css";
import Home from "./components/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/pages/movieDetails/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
