import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "Button",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
