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

test("should render the body component and search resList for burger text input", async() => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchButton = screen.getByRole("button", {name: "Search"});
  expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  
  fireEvent.change(searchInput, {target: {value: "burger"}});
  
  fireEvent.click(searchButton);
  
  //screen should load 4 cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});

test("should filter top rated restaurants", async() => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(11);
});

