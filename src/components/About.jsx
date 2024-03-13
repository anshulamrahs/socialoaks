import APPI from "../assets/approach.jpeg";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] leading-[4vw] tracking-tighter">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach :</h1>
          <button className="px-6 uppercase flex gap-10 items-center rounded-full bg-zinc-900 py-4 text-white mt-10">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#1a1a19]">
          <img className="w-full h-[70vh] rounded-3xl" src={APPI} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default About;
