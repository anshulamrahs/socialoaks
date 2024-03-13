import BG from "../assets/oaksbg.png";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 p-20 flex gap-5">
      <div className="w-1/2 flex h-full flex-col justify-between">
        <div className="heading mt-10">
          <h1 className="text-[6vw] font-semibold uppercase -mb-10">Eye-</h1>
          <h1 className="text-[6vw] font-semibold uppercase -mb-10">Opening</h1>
        </div>
        <img className="w-48 " src={BG} alt=""></img>
      </div>
      <div className="w-1/2 mt-10">
        <h1 className="text-[6vw] font-semibold uppercase -mb-10">
          Presentations
        </h1>
        <div className="links flex flex-col justify-around h-full">
          <div className="details  mt-10">
            {["Facebook", "Instagram", "Dribble", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  className={` capitalize block text-xl font-light`}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="adress">
            <p className="text-lg font-light w-1/2 tracking-tighter ">
              Mohalla obri sach road near trimurti hospial chamba himachal
              pradesh
            </p>
          </div>
          <div className="adress">
            <p className="text-lg font-light w-1/2 tracking-tighter ">
              email: anshulamrahswork@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
