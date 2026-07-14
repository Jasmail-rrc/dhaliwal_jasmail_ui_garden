import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("button is visible", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeInTheDocument();
});

test("button disabled state", () => {
  render(<Button label="Disabled" disabled={true} />);
  expect(screen.getByText("Disabled")).toBeInTheDocument();
});
