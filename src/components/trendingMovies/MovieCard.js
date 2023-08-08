import React, { useState } from "react";
import Popup from "../ui/popup/Popup";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const [isOpenModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  function navigateToDetails() {
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div
      className=" min-w-[600px] h-[300px] bg-red-200 relative rounded-[20px]"
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat center/cover`,
      }}
    >
      <div
        className="absolute w-full h-full bg-red-600 z-0"
        style={{
          background:
            "linear-gradient(360deg, #000 0%, rgba(250, 250, 250, 0.00) 100%)",
        }}
      ></div>
      <div className="absolute w-full h-full z-10 flex gap-5 items-center p-3">
        <div className="  w-[200px]">
          <img
            className="w-[180px] rounded-[20px]"
            src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
        </div>

        <div className="max-w-[400px] w-full ">
          <h3>{movie.title}</h3>
          <h3>{movie.release_date}</h3>
          <p>
            {movie.overview.length > 125
              ? `${movie.overview.slice(0, 125)} ...`
              : movie.overview}
          </p>
          <div className=" flex gap-5 ">
            <button
              className=" py-[15px] px-[25px] bg-[#113995] rounded-[20px]"
              onClick={() => setOpenModal(true)}
            >
              Trailer
            </button>
            <button
              className=" py-[15px] px-[20px] bg-[#113995] rounded-[20px]"
              onClick={navigateToDetails}
            >
              Watch Movie
            </button>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Popup
          title={movie.title}
          id={movie.id}
          onClose={() => setOpenModal(false)}
        >
          <div className="  w-[200px]">
            <img
              className="w-[180px] rounded-[20px]"
              src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </div>
        </Popup>
      )}
    </div>
  );
}
