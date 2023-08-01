import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div
      className=" w-[600px] h-[300px] bg-red-200 rounded-[20px]"
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) red no-repeat center/cover`,
      }}
    >
      <div className=" flex gap-5 items-center p-3">
        <div className="  w-[200px]">
          <img
            className="w-[180px] rounded-[20px]"
            src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
          {/* <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          /> */}
        </div>

        <div className="max-w-[400px] w-full ">
          <h3>{movie.title}</h3>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
          <div className=" flex gap-5 ">
            <button className=" py-[15px] px-[25px] bg-[#113995] rounded-[20px]">
              Trailer
            </button>
            <button className=" py-[15px] px-[20px] bg-[#113995] rounded-[20px]">
              Watch Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
