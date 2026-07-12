import "./Vision.css";
import VisionImgSmall from "../../../assets/images/vision-small.webp";
import VisionImgLarge from "../../../assets/images/vision-large.webp";
const Vision = () => {
  return (
    <section className="vision">
      <div className="vision__text">
        <h2 className="text-preset-2 vision__title">Beyond the plate</h2>

        <p className="vision__description">
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </p>

        <ul className="vision__list">
          <li className="vision__item">
            Encourage family dinners and social cooking.
          </li>
          <li className="vision__item">
            Reduce reliance on single-use packaging and delivery waste.
          </li>
          <li className="vision__item">
            Spark curiosity about seasonal produce and local agriculture.
          </li>
        </ul>
      </div>

      <div className="vision__visual">
        <picture className="vision__img">
          <source srcSet={VisionImgLarge} media="(min-width: 768px)" />
          <img
            className="vision__img"
            src={VisionImgSmall}
            alt="Family cooking a healthy meal together"
          />
        </picture>
      </div>
    </section>
  );
};

export default Vision;
