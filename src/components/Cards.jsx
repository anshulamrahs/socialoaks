import BG from "../assets/oaksbg.png";
import OAK from "../assets/bgblack.png";

const Cards = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-12"
      id="cards"
    >
      <div className="card-contain w-1/2 h-[50vh] ">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img className="w-[20vw] " src={BG} alt=""></img>
          <button className="absolute px-5 py-2 rounded-full border-2 left-10 bottom-10">
            &copy; 2023-2024
          </button>
        </div>
      </div>
      <div className="card-contain w-1/2 h-[50vh] flex gap-5">
        <div className="card rounded-xl w-full h-full bg-[#444343] relative flex items-center justify-center">
          <img className="w-[vw] " src={OAK} alt=""></img>
          <button className="absolute px-5 py-2 rounded-full border-2 left-10 bottom-10">
            &copy; 2023-2024
          </button>
        </div>
        <div className="card rounded-xl w-full h-full bg-[#444343] relative flex items-center justify-center">
          <img className="w-[20vw] " src={BG} alt=""></img>
          <button className="absolute px-5 py-2 rounded-full border-2 left-10 bottom-10">
            &copy; 2023-2024
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
