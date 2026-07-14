import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Button";

test("card title is visible", () => {
  render(
    <Card title="Test Card" description="This is a test card description." />,
  );

  expect(screen.getByText("Test Card")).toBeInTheDocument();
});

test("card description is visible", () => {
  render(
    <Card title="Test Card" description="This is a test card description." />,
  );

  expect(
    screen.getByText("This is a test card description."),
  ).toBeInTheDocument();
});
