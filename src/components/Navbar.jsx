import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/service">Service</Link>
      <br />
      <Link to="/">Service New</Link>
    </>
  );
};

export default Navbar;
