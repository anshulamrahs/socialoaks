import BG from "../assets/bubl.jpeg";

const Eyes = () => {
  return (
    <div className="w-full h-screen overflow-hidden" id="about">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full relative flex items-center justify-center"
      >
        <h1 className="absolute lg:text-9xl -mt-[200px] xxs:text-5xl  xs:text-6xl ss:text-6xl sm:text-9xl md:text-9xl xxs:-mb-[20vh] ">
          Socialoaks.
        </h1>
        <img src={BG} alt=""></img>
      </div>
    </div>
  );
};

export default Eyes;
