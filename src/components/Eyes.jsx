import BG from "../assets/bubl.jpeg";

const Eyes = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full relative flex items-center justify-center"
      >
        <h1 className="absolute text-9xl -mt-60">Socialoaks.</h1>
        <img src={BG} alt=""></img>
      </div>
    </div>
  );
};

export default Eyes;
