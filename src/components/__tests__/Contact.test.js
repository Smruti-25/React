import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<ContactUs />)
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
})

test("should load button inside contact us component", () => {
  render(<ContactUs />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should load button by text inside contact us component", () => {
  render(<ContactUs />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("should load inputs inside contact us component", () => {
  render(<ContactUs />);
  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
});

test("should load two input boxes on the contactUs Component", () => {
  render(<ContactUs />);
  const inputs = screen.getAllByRole("textbox");
  console.log(inputs);
  expect(inputs.length).toBe(2);
});