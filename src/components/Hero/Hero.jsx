import "./Hero.css";
import heroImgSmall from "../../assets/images/hero-small.webp";
import heroImgLarge from "../../assets/images/hero-large.webp";
import heroPatternImg from "../../assets/images/hero-pattern.svg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="text-preset-1">
          <span className="hero__highlight">Healthy</span> meals, zero fuss
        </h1>

        <p className="hero__description">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>

        <Button text="Start exploring" size="large" className="hero__cta" />
      </div>

      <div className="hero__visual">
        <picture className="hero__img">
          <source srcSet={heroImgLarge} media="(min-width: 768px)" />
          <img
            className="hero__img"
            src={heroImgSmall}
            alt="Person cooking a healthy meal"
          />
        </picture>

        <img
          className="hero__pattern"
          src={heroPatternImg}
          alt="Pattern Illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
