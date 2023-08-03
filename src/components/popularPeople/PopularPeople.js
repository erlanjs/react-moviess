import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { api_key } from "../../Api_key/Api_key";

export default function PopularPeople() {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    getPopularPeople();
  }, []);

  function getPopularPeople() {
    axios(
      `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=ru-RU&page=1`
    ).then(({ data }) => {
      setPopularPeople(data.results);
    });
  }

  return (
    <div>
      <h3 className=" pt-6 text-xl font-bold">Popular People⭐️</h3>
      <div className="flex max-w-[100%]  overflow-scroll gap-5 mt-4 ">
        {popularPeople.map((movie) => (
          <div>
            <img
              className="w-[180px] rounded-[20px]"
              src={`https://www.themoviedb.org/t/p/original/${movie.profile_path}`}
              alt=""
            />
            <h4>{movie.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
