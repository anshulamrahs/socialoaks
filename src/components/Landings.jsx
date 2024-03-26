"use Client";
import UseMousePosition from "../utils/UseMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
import "./landigs.scss";
import { FaArrowDown } from "react-icons/fa";

const Landings = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = UseMousePosition();
  const size = isHovered ? 300 : 40;
  return (
    <div className="main ">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "Tween",
          ease: "backOut",
        }}
        className="mask"
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A Visually Creative team of Designers and Developers which Haven't
          been replaced by A.I (Yet). Making good Shit only if the Paycheck is
          Equally Good.
        </p>
      </motion.div>
      <div className="bodycon">
        <p>
          We are a <span>Selectively Skilled </span>
          Design and Development Company with Strong Focus on Producing High
          Quality & Impactful Digital Experience.
        </p>
      </div>
      <div className="jp">
        {["For Public and Private Companies", "From First Pitch to ipo"].map(
          (item, index) => (
            <p key={index} className="port">
              {item}
            </p>
          )
        )}

        <div className="start">
          <div className="rt">Start the project</div>
          <div className="jt">
            <span className="rts">
              <FaArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landings;
