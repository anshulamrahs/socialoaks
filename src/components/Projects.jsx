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
    <div
      className="w-full lg:py-20 md:py-20 sm:py-20 xs:py-0 xxs:py-0"
      id="project"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="lg:text-6xl md:text-6xl sm:text-6xl xs:text-4xl xxs:text-3xl tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards lg:w-full xs:w-full lg:flex md:flex sm:flex ss:flex xs:block gap-10 mt-10 sm:h-[50vh]">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative lg:w-1/2 lg:h-[75vh] md:w-1/2 md:h-[75vh] sm:w-1/2 sm:h-[50vh] "
          >
            <h1 className="text-8xl xxs:hidden flex absolute overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter">
              {"NETFLIX".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.07 }}
                  className="inline-block "
                  key={index}
                  exit={{ y: "0%" }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="lg:w-full lg:h-[65vh] md:h-[50vh] md:w-full sm:h-[40vh] sm:w-full ss:w-full ss:h-[30vh] xs:w-[40vh] xs:h-[25vh] rounded-xl overflow-hidden">
              <img
                className="lg:w-full lg:h-[65vh] md:h-[50vh] md:w-full sm:h-[40vh] sm:w-full ss:w-full ss:h-[30vh] xs:w-[40vh] xs:h-[30vh] xxs:w-[60vw] xxs:h-[25vh] bg-cover  "
                src="https://images.unsplash.com/photo-1627873649417-c67f701f1949?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              ></img>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container lg:w-1/2 lg:h-[75vh] md:w-1/2 md:h-[75vh] sm:w-1/2 sm:h-[75vh] xs:h-[70vh] relative "
          >
            <h1 className="flex overflow-hidden text-8xl xxs:hidden absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter">
              {"YOUTUBE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.07 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="lg:w-full lg:h-[65vh] md:h-[50vh] md:w-full sm:h-[40vh] sm:w-full ss:w-full ss:h-[30vh] xs:w-[40vh] xs:h-[30vh] xxs:w-[54vw] xxs:h-[25vh] xxs:mt-5 overflow-hidden">
              <img
                className="lg:w-full lg:h-[65vh] md:h-[50vh] md:w-full sm:h-[40vh] sm:w-full ss:w-full ss:h-[30vh] xs:w-[40vh] xs:h-[30vh] xxs:w-[54vw] xxs:h-[25vh] bg-cover  rounded-xl "
                src="https://images.unsplash.com/photo-1691055712341-7feb54e32cb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTN8fHxlbnwwfHx8fHw%3D"
                alt=""
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
