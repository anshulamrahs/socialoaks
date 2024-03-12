import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marque />
      <About/>
    </div>
  );
};

export default App;
