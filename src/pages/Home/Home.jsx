import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import RealLife from "./RealLife/RealLife";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />

      <Features />

      <RealLife />

      <CTA />
    </>
  );
};

export default Home;
