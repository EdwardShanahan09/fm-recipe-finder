import CTA from "./components/CTA/CTA";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import RealLife from "./components/RealLife/RealLife";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />

        <Features />

        <RealLife />

        <CTA />
      </main>
    </>
  );
};

export default App;
