import React from "react";
import Layout from "../../layout";
import { useState } from "react";
import TrendingMovies from "../../trendingMovies/TrendingMovies";
import TopRatedMovies from "../../topRatedMovies/TopRatedMovies";
import PopularPeople from "../../popularPeople/PopularPeople";

export default function Home() {
  const [carentTab, setCarentTab] = useState(0);
  const tabs = ["Home", "Series", "TV Show"];
  return (
    <Layout>
      <div>
        <ul className="flex gap-3 pt-6">
          {tabs.map((tab, index) => (
            <li
              className=" cursor-pointer"
              style={{ color: index === carentTab ? "white" : "gray" }}
              onClick={() => setCarentTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <TrendingMovies />
        <TopRatedMovies />
        <PopularPeople />
      </div>
    </Layout>
  );
}
