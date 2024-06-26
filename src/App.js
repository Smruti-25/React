import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/About"));

//todo add cart logo
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //some authentication logic
    const data = {
      name: "Smruti",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading about us...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },

      {
        path: "/contactus",
        element: <ContactUs />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);