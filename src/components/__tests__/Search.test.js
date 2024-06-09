const { render, screen } = require("@testing-library/react");
import Body from "../Body";
import "@testing-library/jest-dom";

test("should render the body component with search button", () => {
  render(<Body />);
  const searchButton = screen.findByText("Search");
  expect(searchButton).toBeInTheDocument();
});
