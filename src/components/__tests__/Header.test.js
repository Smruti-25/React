import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";

describe("should test the header component", () => {
  test("should load header component with login button", () => {
    render(
      <Provider store={appStore}>
       <Header />
      </Provider>
    );
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });
});