import Button from "./Button";

const meta = {
  title: "Components/Label",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "Label",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Label",
    disabled: true,
  },
};
