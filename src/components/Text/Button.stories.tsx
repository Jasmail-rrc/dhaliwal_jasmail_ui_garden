import Button from "./Button";

const meta = {
  title: "Components/Text",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "Text",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Text",
    disabled: true,
  },
};
