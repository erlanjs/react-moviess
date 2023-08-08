import React from "react";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <div className="flex gap-3">
      <Header />
      <div className=" ml-[250px] w-full mr-[260px]">{children}</div>
    </div>
  );
}
