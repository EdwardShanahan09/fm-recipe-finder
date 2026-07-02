import Button from "../Button/Button";
import patternLeft from "../../assets/images/cta-pattern-left.svg";
import patternRight from "../../assets/images/cta-pattern-right.svg";
import "./CTA.css";
const CTA = () => {
  return (
    <section className="cta">
      <h2 className="text-preset-2 cta__title">Ready to cook smarter?</h2>

      <p className="cta__description">
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </p>

      <Button className="cta__button" text="Browse recipes" />

      <img
        className="cta__pattern cta__pattern--left"
        src={patternLeft}
        alt="Fork
       Illustration"
      />

      <img
        className="cta__pattern cta__pattern--right"
        src={patternRight}
        alt="Knife
       Illustration"
      />
    </section>
  );
};

export default CTA;
