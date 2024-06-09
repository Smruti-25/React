const { render, screen, act, fireEvent } = require("@testing-library/react");
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
});

test("should render the body component with search button", async() => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchButton = screen.getByRole("button", {name: "Search"});

  const searchInput = screen.getByTestId("searchInput");
  
  fireEvent.change(searchInput, {target: {value: "burger"}});
  
  fireEvent.click(searchButton);
  
  //screen should load 4 cards
  expect(searchButton).toBeInTheDocument();
});
