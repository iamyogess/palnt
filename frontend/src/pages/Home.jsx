import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Contact from "./Contact";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Header />
        <Products/>
        <Contact/>
      </div>
    </>
  );
};

export default Home;
