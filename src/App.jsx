import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default App;
