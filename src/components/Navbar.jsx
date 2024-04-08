import BG from "../assets/oaksbg.png";

const Navbar = () => {
  return (
    <div className="fixed z-[999] h-[10vh] w-full flex justify-between items-center px-20 bg-transparent backdrop-blur  ">
      <div className="logo top-0 ">
        <a href="#home" alt="home">
          <img
            className="lg:w-[18vw] lg:h-[22vh] md:w-[18vw] md:h-[32vh] sm:w-[14vw] sm:h-[18vh] ss:w-[18vw] ss:h-[18vh] xs:w-[28vw] xs:h-[26vh] xxs:w-[62vw] xxs:h-[26vh]"
            src={BG}
            alt=""
          ></img>
        </a>
      </div>
      <div className="links gap-10 lg:flex md:flex sm:flex ss:flex xs:hidden xxs:hidden">
        {["Services", "Our Work", "About US", "Contact"].map(
          (item, index, id) => (
            <a
              key={index}
              href={id}
              className={`lg:text-lg md:text-lg sm:text-sm ss:text-[12px] font-light capitalize ${
                index === 3 && "lg:ml-32 md:ml-32 sm:ml-22 ss:ml-0"
              } `}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
