import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import About from "./components/About";

import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Eyes from "./components/Eyes";
import Landings from "./components/Landings";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landings />
      <Marque />
      <About />
      <Eyes />
      <Projects />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
