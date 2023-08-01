import React from "react";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <div className="flex gap-3">
      <Header />
      {children}
    </div>
  );
}
