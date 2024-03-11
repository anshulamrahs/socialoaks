import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marque from "./components/Marque";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marque />
    </div>
  );
};

export default App;
