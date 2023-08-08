import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { api_key } from "../../Api_key/Api_key";
import { Link } from "react-router-dom";

export default function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  function getTopRatedMovies() {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=ru-Ru&page=1"`
    ).then(({ data }) => {
      setTopRatedMovies(data.results);
    });
  }
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return (
    <div>
      <h3 className=" pt-6 text-xl font-bold">Top Rated ⭐️</h3>
      <div className="flex max-w-[100%]  overflow-scroll gap-5 mt-4 ">
        {topRatedMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} className="min-w-[180px] ">
            {" "}
            <img
              className="w-[180px] rounded-[20px]"
              src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
