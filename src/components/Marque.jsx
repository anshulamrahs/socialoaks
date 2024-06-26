import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full rounded-tl-3xl rounded-tr-3xl  lg:py-20 md:py-16 sm:py-14 xxs:py-8 bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-[#f5deb3d9] flex  whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-semibold uppercase   pr-10"
        >
          We are SocialOaks.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-semibold uppercase    "
        >
          We are Socialoaks.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
