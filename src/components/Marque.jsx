import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl  py-20 bg-[#004D43]">
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
          className="text-[22vw] leading-none font-semibold uppercase    "
        >
          We are Socialoaks.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
