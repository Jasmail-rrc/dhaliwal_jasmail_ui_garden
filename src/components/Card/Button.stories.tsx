import Button from "./Button";

const meta = {
  title: "Components/Card",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "Card",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Card",
    disabled: true,
  },
};
