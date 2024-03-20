import BG from "../assets/oaksbg.png";

const Navbar = () => {


  return (
    <div  className="fixed z-[999] h-[10vh] w-full flex justify-between items-center px-20 bg-transparent backdrop-blur ">
      <div className="logo top-0  ">
        <a href="#home" alt="home">
        <img
          className="xl:w-[14vw] xl:h-[10vw] md:w-[25vw] md:h-[20vw]"
          src={BG}
          alt=""
        ></img>
        </a>
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About US", "Contact"].map((item, index,id) => (
          <a
            key={index}
            href={id}
            className={`text-lg font-light capitalize ${
              index === 3 && "ml-32"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
