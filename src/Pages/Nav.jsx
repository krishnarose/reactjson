import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-zinc-200 p-3 flex items-center justify-evenly shadow-xl">
        <div className="text-2xl text-black font-semibold">
          Json Data Display
        </div>
        <div className="text-black text-xl font-semibold ">
          <Link to={"/"}>
            {" "}
            <span className="bg-zinc-300 px-3 py-2 rounded-xl hover:bg-zinc-400">
              Home
            </span>
          </Link>
          <Link to={"/Shop"}>
            {" "}
            <span className="bg-zinc-300 px-3 py-2 rounded-xl hover:bg-zinc-400">
             Shop
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
