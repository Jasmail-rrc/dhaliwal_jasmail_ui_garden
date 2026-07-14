import Button from "./Button";

const meta = {
  title: "Components/HeroImage",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "HeroImage",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled HeroImage",
    disabled: true,
  },
};
