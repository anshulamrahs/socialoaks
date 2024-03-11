import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl  py-20 bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw] leading-none font-semibold uppercase  "
        >
          We are SocialOaks.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw] leading-none font-semibold uppercase   "
        >
          We are Socialoaks.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
