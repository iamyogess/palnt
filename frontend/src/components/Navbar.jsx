import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex w-screen h-[68px] justify-between items-center bg-white border-b-2 sticky">
      <div className="logo ml-10">LOGO</div>
      <div className="links mr-12 flex gap-10 ">
        <Link to="/" className="hover:tracking-widest transition-all ease-in-out">Home</Link>
        <span>About</span>
        <Link to="/contact" className=" hover:transition-all hover:ease-in-out hover:tracking-widest">Contacts</Link>
        <span>News</span>
      </div>
    </div>
  );
};

export default Navbar;
