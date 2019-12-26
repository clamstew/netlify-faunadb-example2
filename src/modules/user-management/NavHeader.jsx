import React from "react";
import { Link } from "react-router-dom";

export const NavHeader = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>&nbsp;&bull;&nbsp;
      <Link to={"/signup"}>Sign Up</Link>&nbsp;&bull;&nbsp;
      <Link to={"/login"}>Login</Link>
    </>
  );
};
