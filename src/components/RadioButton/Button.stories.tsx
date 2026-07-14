import Button from "./Button";

const meta = {
  title: "Components/RadioButton",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "RadioButton",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled RadioButton",
    disabled: true,
  },
};
