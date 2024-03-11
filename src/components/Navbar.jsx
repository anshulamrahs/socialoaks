import BG from "../assets/oaksbg.png";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full flex justify-between items-center px-20 ">
      <div className="logo top-0">
        <img className="w-[210px] h-[150px] " src={BG} alt=""></img>
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About US", "Contact"].map((item, index) => (
          <a
            key={index}
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
