import React from "react";
import { data } from "./data";

const Shop = () => {
  return (
    <>
     <div>
     <div className="text-2xl text-red-500 font-semibold underline mt-10 ">
        Phone Dispay
      </div>

      <div>
        <input type="text"  className=""/>
      </div>
     </div>

      <div className="flex justify-center items-center gap-10 w-full flex-wrap mt-10 ">
        {
            data.map((apple)=>{
                return(
                    <>
                    <div className="flex flex-col justify-start items-start gap-5" key={apple.Id}>
                        <img src={apple.image} alt={apple.title} className="w-[240px]" />
                        <h2 className="font-semibold text-xl">{apple.title}</h2>
                        <h3 className="font-semibold">{apple.description}</h3>
                        <p className="text-xl font-semibold"> <span className="text-xl font-exterbold"> ₹ </span>{apple.price}</p>
                        <button className="bg-blue-400 text-xl font-semibold text-black rounded-xl px-3 py-2 hover:bg-blue-500"> Buy Now</button>

                    </div>
                    </>
                )
            })
        }
      </div>
    </>
  );
};

export default Shop;
