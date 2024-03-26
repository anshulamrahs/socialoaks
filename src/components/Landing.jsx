import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import BG from "../assets/bubl.jpeg";

const Landing = () => {
  return (
    <div
    id="home"
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="masker mt-52 px-[120px]">
        {["We Create", "Eye Opening", "Designs"].map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{
                      type: "smoother",
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.6,
                    }}
                    className="w-[9vw] h-[5vw] rounded-md mr-[1vw] bg-slate-50"
                  >
                    <motion.img
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{
                        type: "smoother",
                        ease: [0.76, 0, 0.24, 1],
                        duration: 0.6,
                      }}
                      className="w-[9vw] rounded-md bg-contain h-[5vw]"
                      src={BG}
                      alt=""
                    ></motion.img>
                  </motion.div>
                )}
                <h1 className="uppercase text-[6.5vw] leading-[6.5vw] tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-800 mt-20 uppercase flex items-center justify-between py-5">
        {["For Public and Private Companies", "From First Pitch to ipo"].map(
          (item, index) => (
            <p
              key={index}
              className="px-5 py-2 text-md font-light tracking-tight leading-none"
            >
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
