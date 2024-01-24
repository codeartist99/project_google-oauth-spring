import React from "react";
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <div className={"w-full"}>
        <NavLink to={"/login"} className={"btn"}>Login</NavLink>
      </div>
    </>
  );
};