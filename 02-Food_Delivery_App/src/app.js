import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/about";
import Contactus from "./components/contactus";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";

const About = lazy(() => import("./components/about"));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurant from "./components/Restaurant";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
