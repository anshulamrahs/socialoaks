import BG from "../assets/oaksbg.png";

const Navbar = () => {
  return (
    <div className="fixed z-[999] h-[10vh] w-full flex justify-between items-center px-20 bg-transparent backdrop-blur  ">
      <div className="logo top-0  ">
        <a href="#home" alt="home">
          <img className="lg:w-[14vw] lg:h-[10vw] sm:w-[" src={BG} alt=""></img>
        </a>
      </div>
      <div className="links gap-10 lg:flex md:flex sm:flex ss:hidden xs:hidden ">
        {["Services", "Our Work", "About US", "Contact"].map(
          (item, index, id) => (
            <a
              key={index}
              href={id}
              className={`lg:text-xl font-light capitalize md:text-lg sm:text-[5px]${
                index === 3 && "ml-32"
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
