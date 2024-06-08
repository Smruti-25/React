import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("should test the header component", () => {
  test("should load header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument();
  });

  // test("should load header component with cart", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );
  //   const cart = screen.getByText(/Cart/);
  //   expect(cart).toBeInTheDocument();
  // });

  test("should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});

