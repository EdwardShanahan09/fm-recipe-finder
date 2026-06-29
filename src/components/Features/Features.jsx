import Feature1Icon from "../../assets/icons/icon-feature-1.svg";
import Feature2Icon from "../../assets/icons/icon-feature-2.svg";
import Feature3Icon from "../../assets/icons/icon-feature-3.svg";
import Feature from "../Feature/Feature";
import "./Features.css";

const featuresList = [
  {
    id: 1,
    icon: Feature1Icon,
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    id: 2,
    icon: Feature2Icon,
    title: "Minimum fuss",
    description:
      "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    id: 3,
    icon: Feature3Icon,
    title: "Search in seconds",
    description:
      "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2 className="text-preset-2 ">What you’ll get</h2>

      <ul className="features__list">
        {featuresList.map(({ id, icon, title, description }) => (
          <Feature
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Features;
