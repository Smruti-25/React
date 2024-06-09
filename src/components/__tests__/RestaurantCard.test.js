const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render restaurant card component with props data", () => {
  render(<RestaurantCard resData = {MOCK_DATA}/>);

  const restroName = screen.getByText("Reddy's Gokul Brindavan Restaurant");

  expect(restroName).toBeInTheDocument();
});

test("should render Restaurant card component with promoted label", () => {
  //higher order compoenent, with promoted label
})