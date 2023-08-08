import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import { api_key } from "../../Api_key/Api_key";
import Popup from "../ui/popup/Popup";

export default function TrendingMovies() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    getTrendMovies();
  }, []);

  function getTrendMovies() {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ru-Ru&page=1"`
    ).then(({ data }) => {
      setTrendingMovie(data.results);
      console.log(data.results);
    });
  }

  return (
    <div>
      <h3 className=" pt-6 text-xl font-bold">Trending Movie 🔥</h3>
      {/* <Popup />/ */}
      <div className="flex max-w-[100%]  overflow-scroll gap-5 mt-4 ">
        {trendingMovie.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
