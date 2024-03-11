import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="masker mt-52 px-[120px]">
        {["We Create", "Eye Opening", "Designs"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <div className="w-[9vw] h-[5vw] rounded-md mr-[1vw] bg-slate-50"></div>
                )}
                <h1 className="uppercase text-[6.5vw] leading-[6.5vw] tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 uppercase flex items-center justify-between py-5">
        {["For Public and Private Companies", "From First Pitch to ipo"].map(
          (item, index) => (
            <p className="px-5 py-2 text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 rounded-full border-[1px] border-zinc-500 font-light text-md capitalize">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
