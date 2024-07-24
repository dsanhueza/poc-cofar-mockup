import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";

export default function CoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <CategoriesBar/>
      <main>{children}</main>
    </>
  );
}
