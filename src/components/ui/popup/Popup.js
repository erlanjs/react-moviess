import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { api_key } from "../../../Api_key/Api_key";

export default function Popup({ children, onClose, id, title, isOpen }) {
  const [traller, setTraller] = useState({});
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=ru-Ru&page=1"`
    ).then(({ data }) => {
      console.log(data);
      if (data.results.length) {
        setTraller(data?.results?.[0]);
      } else {
        alert("No trailer");
        onClose();
      }
    });
  }, [id]);

  return (
    <div className=" fixed  top-0 left-0 w-full z-50 min-h-screen bg-[#1a161fca] flex justify-center items-center">
      <div className="bg-[#1a161f] w-[900px] h-[600px]">
        <div className="flex justify-between pt-3 pr-3 cursor-pointer px-5">
          <h1 className=" text-white font-bold ">{title}</h1>
          <span className=" text-[24px]" onClick={onClose}>
            <AiOutlineClose />
          </span>
        </div>
        <div className=" flex justify-center items-center mt-3">
          <iframe
            width="850"
            height="550"
            src={`https://www.youtube.com/embed/${traller?.key}?autoplay=1`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
