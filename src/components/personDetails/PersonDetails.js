import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_key } from "../../Api_key/Api_key";

export default function PersonDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/person/${id}?language=ru-RU&api_key=${api_key}`
    ).then(({ data }) => {
      console.log("🌼", data);
      setPerson(data);
    });
  }, []);

  return (
    <div className="">
      <div className="">
        <img
          className="w-[400px]"
          src={`https://www.themoviedb.org/t/p/original/${person?.profile_path}`}
          alt=""
        />
      </div>
    </div>
  );
}
