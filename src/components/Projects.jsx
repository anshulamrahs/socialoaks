import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative w-1/2 h-[75vh] "
          >
            <h1 className="text-8xl flex absolute overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.1 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://images.unsplash.com/photo-1603244873016-c0ede259d131?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              ></img>
            </div>
          </motion.div>
          <motion.div 
           onHoverStart={() => handleHover(1)}
           onHoverEnd={() => handleHoverEnd(1)}
          className="card-container w-1/2 h-[75vh] relative ">
            <h1 className="flex overflow-hidden text-8xl absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                 <motion.span
                 initial={{ y: "100%" }}
                 animate={cards[1]}
                 transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.1 }}
                 className="inline-block "
                 key={index}
               >
                 {item}
               </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover "
              src="https://images.unsplash.com/photo-1603244873016-c0ede259d131?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            ></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
