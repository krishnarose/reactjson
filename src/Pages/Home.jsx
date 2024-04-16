import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { VscLoading } from "react-icons/vsc";

const Home = () => {
  const [apidata, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setTimeout(() => {
          setApiData(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <>
            <div className="h-screen items-center justfy-center flex gap-5 flex-col">
            <VscLoading className="text-5xl font-bold text-slate-700 animate-spin" />
            <h1 className="font-bold text-xl">
              Loading data for you .....
            </h1>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
            {apidata.map((data) => {
              return (
                <div
                  key={data.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 p-5"
                >
                  <img
                    className="w-[200px] h-64 object-cover"
                    src={data.image}
                    alt=""
                  />
                  <div className="p-4">
                    <h1 className="text-xl font-semibold">{data.title}</h1>
                    <p className="mt-2">{data.description}</p>
                    <div className="p-2 flex items-center justify-between">
                      <button
                        type="button"
                        className="font-semibold bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-xl shadow-md"
                      >
                        BUY NOW
                      </button>
                      <span className="font-semibold bg-green-500 hover:bg-green-400 px-3 py-2 rounded-xl shadow-md">
                        ADD to Cart
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
