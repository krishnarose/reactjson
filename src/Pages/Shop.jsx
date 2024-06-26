import React, { useState } from "react";
import { data } from "./data";
import { AiOutlineSearch } from "react-icons/ai";

const Shop = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex justify-between p-5  items-center mt-10 ">
        <div className="text-2xl text-red-500 font-semibold underline">
          Phone Dispay
        </div>

        <div className="transition-transform duration-300 ease-in-out ">
          <div>
            <input
              type="text"
              className="  w-[300px] h-[40px] border border-black pl-3 font-semibold rounded-md shadow-xl"
              placeholder="Search products..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className=" pl-[260px] cursor-pointer ">
            <AiOutlineSearch className="text-3xl font-extrabold -mt-8  " />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 w-full flex-wrap mt-10 ">
        {data
          .filter((iphone) => {
            if (search === "") {
              return true;
            } else if (
              iphone.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
          })
          .map((apple) => {
            return (
              <>
                <div
                  className="flex flex-col justify-start items-start gap-5"
                  key={apple.Id}
                >
                  <img
                    src={apple.image}
                    alt={apple.title}
                    className="w-[240px]"
                  />
                  <h2 className="font-semibold text-xl">{apple.title}</h2>
                  <h3 className="font-semibold">{apple.description}</h3>
                  <p className="text-xl font-semibold">
                    {" "}
                    <span className="text-xl font-exterbold"> ₹ </span>
                    {apple.price}
                  </p>
                  <button className="bg-blue-400 text-xl font-semibold text-black rounded-xl px-3 py-2 hover:bg-blue-500">
                    {" "}
                    Buy Now
                  </button>
                </div>
              </>
            );
          })}
        {data.filter((iphone) =>
          iphone.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())
        ).length === 0 && (
          <h1 className="text-2xl font-sembold animate-pulse text-red-500">
            No result found for "{search}"
          </h1>
        )}
      </div>
    </>
  );
};

export default Shop;
