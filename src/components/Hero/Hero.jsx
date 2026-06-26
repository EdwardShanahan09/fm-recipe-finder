import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="text-preset-1">Healthy meals, zero fuss</h1>

      <p>
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>

      <Button text="Start exploring" size="large" className="hero__cta" />
    </div>
  );
};

export default Hero;
