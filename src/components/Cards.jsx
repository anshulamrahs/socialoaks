import BG from "../assets/oaksbg.png";
import OAK from "../assets/bgblack.png";

const Cards = () => {
  return (
    <div
      className="w-[100vw] h-[70vh] bg-zinc-900 lg:flex md:flex sm:flex xs:block  mt-32 gap-5 items-center px-12"
      id="cards"
    >
      <div className="card-contain lg:w-1/2 lg:h-[50vh] md:w-[40vw] md:h-[40vh] sm:w-[40vw] sm:h-[40vh] xs:w-[80vw] xs:h-[20vh] xxs:w-[80vw] xxs:h-[20vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center mt-3">
          <img className="w-[20vw] " src={BG} alt=""></img>
          <button className="absolute lg:px-5 lg:py-2 md:px-5 md:py-2 sm:px-5 sm:py-2 xs:px-1 xs:py-1 xs:text-[8px]  xxs:text-[6px] rounded-full border-2 left-10  xxs:bottom-2 lg:bottom-10 md:bottom-10 sm:bottom-10 xs:bottom-5">
            &copy; 2023-2024
          </button>
        </div>
      </div>
      <div className="card-contain lg:w-1/2 lg:h-[50vh] md:w-[50vw] md:h-[40vh] sm:w-[50vw] sm:h-[40vh] xs:w-[80vw] xs:h-[20vh] xxs:w-[80vw] xxs:h-[20vh] mt-5 flex gap-5">
        <div className="card rounded-xl w-full h-full bg-[#444343] relative flex items-center justify-center">
          <img className="w-[vw] " src={OAK} alt=""></img>
          <button className="absolute lg:px-5 lg:py-2 md:px-5 md:py-2 sm:px-5 sm:py-2 xs:px-1 xs:py-1 xs:text-[8px] xxs:text-[6px]  rounded-full border-2 left-10 xxs:bottom-2  lg:bottom-10 md:bottom-10 sm:bottom-10 xs:bottom-5">
            &copy; 2023-2024
          </button>
        </div>
        <div className="card rounded-xl lg:w-full lg:h-full md:w-[50vw] md:h-[40vh] sm:w-[50vw] sm:h-[40vh] xs:w-[80vw] xs:h-[20vh] xxs:w-[80vw] xxs:h-[20vh]  bg-[#444343] relative flex items-center justify-center ">
          <img className="w-[20vw] " src={BG} alt=""></img>
          <button className="absolute lg:px-5 lg:py-2 md:px-5 md:py-2 sm:px-5 sm:py-2 xs:px-1 xs:py-1 xs:text-[8px] xxs:text-[6px]  rounded-full border-2 left-10 xxs:bottom-2  lg:bottom-10 md:bottom-10 sm:bottom-10 xs:bottom-5">
            &copy; 2023-2024
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
