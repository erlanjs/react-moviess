import "./App.css";
import Home from "./components/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/pages/movieDetails/MovieDetails";
import PersonDetails from "./components/personDetails/PersonDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/people/:id" element={<PersonDetails />} />
      </Routes>
    </>
  );
}

export default App;
