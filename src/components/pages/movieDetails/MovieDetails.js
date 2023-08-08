import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api_key } from "../../../Api_key/Api_key";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MovieCard from "../../trendingMovies/MovieCard";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [actor, setActor] = useState();
  const navigate = useNavigate();
  const [similars, setSimilars] = useState();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=ru-Ru&page=1"`
    ).then(({ data }) => {
      console.log(data);
      setMovie(data);
    });
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-RU&api_key=${api_key}`
    ).then(({ data }) => {
      console.log(data);
      setActor(data);
    });
    axios(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=ru-RU&page=1&api_key=${api_key}`
    ).then(({ data }) => {
      console.log(data);
      setSimilars(data);
    });
  }, [id]);

  return (
    <div>
      <div
        className="flex p-10 items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <span className="text-3xl">
          {" "}
          <AiOutlineArrowLeft />
        </span>
        <h1 className="text-3xl">{movie?.title}</h1>
      </div>

      <div
        className="w-full min-h-[50vh] p-3 flex gap-3 relative"
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})  no-repeat center/cover`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 z-10 p-3 flex gap-3">
          <img
            className="w-[350px]"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt=""
          />
          <div className="mt-[50px] max-w-[600px]">
            <h1 className="text-4xl">{movie?.title}</h1>
            <p>{movie?.overview}</p>
          </div>
        </div>
        <div
          className=" absolute w-full h-full top-0 left-0"
          style={{
            background:
              "linear-gradient(0deg, #000 0%, rgba(217, 217, 217, 0.00) 100%)",
          }}
        />
      </div>
      <h1 className="py-5 text-3xl">Actors ⭐️ </h1>
      <div className="flex min-w-[100%] overflow-scroll gap-6 mt-4 ">
        {actor?.cast
          ?.filter((el) => el.profile_path)
          .map((movie) => (
            <div className="min-w-[180px]">
              <img
                className="w-[180px] rounded-[20px]"
                src={`https://www.themoviedb.org/t/p/original/${movie?.profile_path}`}
                alt=""
              />
              <h4>{movie?.name}</h4>
            </div>
          ))}
      </div>
      <h1 className="py-5 text-3xl">Similar 💫</h1>

      <div className="flex overflow-scroll gap-3">
        {similars?.results
          ?.filter(
            (el) =>
              el.title && el.overview && el.poster_path && el.backdrop_path
          )
          .map((semilar) => (
            <MovieCard movie={semilar} />
          ))}
      </div>
    </div>
  );
}
