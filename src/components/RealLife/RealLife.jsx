import "./RealLife.css";
import realLifeImgSmall from "../../assets/images/real-life-small.webp";
import realLifeImgLarge from "../../assets/images/real-life-large.webp";

const RealLife = () => {
  return (
    <section className="real-life">
      <div className="real-life__text">
        <h2 className="text-preset-2 real-life__title">Built for real life</h2>

        <p className="real-life__description">
          Cooking shouldn’t be complicated. These recipes come in under{" "}
          <span>30 minutes</span> of active time, fit busy schedules, and taste
          good enough to repeat.
        </p>

        <p className="real-life__description">
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got
          you covered.
        </p>
      </div>

      <picture className="real-life__img">
        <source srcSet={realLifeImgLarge} media="(min-width: 768px)" />
        <img
          className="real-life__img"
          src={realLifeImgSmall}
          alt="Person cutting vegetables"
        />
      </picture>
    </section>
  );
};

export default RealLife;
