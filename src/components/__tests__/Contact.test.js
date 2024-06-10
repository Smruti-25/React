import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


describe("test cases for the contact us component", () => {

  // beforeAll(() => {
  //   console.log("before all, before running all the test cases")
  // })

  // beforeEach(() => {
  //   console.log("Before each, before each test case")
  // })


  // afterAll(() => {
  //   console.log("afterAll, after running all the test cases");
  // });

  // afterEach(() => {
  //   console.log("afterEach, after running each test case");
  // });

  test("should load contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

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

  it("should load two input boxes on the contactUs Component", () => {
    render(<ContactUs />);
    const inputs = screen.getAllByRole("textbox");
    console.log(inputs);
    expect(inputs.length).toBe(2);
  });
});
