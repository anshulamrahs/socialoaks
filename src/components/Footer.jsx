import BG from "../assets/oaksbg.png";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 p-20 flex gap-5 " id="contact">
      <div className="w-1/2 flex h-full flex-col justify-between">
        <div className="heading mt-10">
          <h1 className="lg:text-[6vw] md:text-[6vw] sm:text-[6vw] xs: font-semibold uppercase -mb-0">
            Eye-
          </h1>
          <h1 className="lg:text-[6vw] md:text-[6vw] sm:text-[6vw] xs: font-semibold uppercase -mb-0">
            Opening
          </h1>
        </div>
        <img
          className="lg:w-48 md:w-48 sm:w-48 xs:w-48 xxs:w-32"
          src={BG}
          alt=""
        ></img>
      </div>
      <div className="w-1/2 mt-10">
        <h1 className="text-[6vw] font-semibold uppercase -mb-10">
          Development
        </h1>
        <div className="links flex flex-col justify-around h-full">
          <div className="details  mt-10">
            {["Facebook", "Instagram", "Dribble", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  className={` capitalize block lg:text-xl md:text-xl sm:text-xl xs:text-lg xxs:text-sm font-light`}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="adress">
            <p className="lg:text-xl md:text-xl sm:text-xl xs:text-lg xxs:text-sm font-light w-1/2 tracking-tighter uppercase ">
              Address: Mohalla obri sach road near trimurti Hospial Chamba
              Himachal Pradesh
            </p>
          </div>
          <div className="adress">
            <p className="lg:text-xl md:text-xl sm:text-xl xs:text-lg xxs:text-[10px] font-light w-1/4 tracking-tighter ">
              Email: socialoaksmedia@gmail.com. Tel: +919816633897
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
