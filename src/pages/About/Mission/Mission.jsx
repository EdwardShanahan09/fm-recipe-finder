import missionImgSmall from "../../../assets/images/mission-small.webp";
import missionImgLarge from "../../../assets/images/mission-large.webp";

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission__text">
        <h2 className="text-preset-2 mission__title">
          Help more people cook nourishing meals, more often.
        </h2>

        <p className="mission__description">
          Healthy Recipe Finder was created to prove that healthy eating can be
          convenient, affordable, and genuinely delicious.
        </p>

        <p className="mission__description">
          We showcase quick, whole-food dishes that anyone can master—no fancy
          equipment, no ultra-processed shortcuts—just honest ingredients and
          straightforward steps.
        </p>
      </div>

      <div className="hero__visual">
        <picture className="mission__img">
          <source srcSet={missionImgLarge} media="(min-width: 768px)" />
          <img
            className="mission__img"
            src={missionImgSmall}
            alt="Person cooking a healthy meal"
          />
        </picture>
      </div>
    </div>
  );
};

export default Mission;
