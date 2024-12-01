import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/views/MainLayout";
import NotFound from "./components/views/NotFound";

import Home from "./components/views/Home";
import About from "./components/views/About";
import Cart from "./components/Cart";
import SignUp from "./components/views/SignUp";
import Login from "./components/views/Login";
import ProductView from "./components/views/ProductView";
import Shop from "./components/views/Shop";
import Confirmation from "./components/views/Confirmation";
import NoItemsInCart from "./components/views/NoItemsInCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Shop />,
      },
      {
        path: "products/categories/:id",
        element: <Shop />,
      },
      {
        path: "products/:id",
        element: <ProductView />,
      },
      {
        path: "checkout",
        element: <Cart />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "/empty-cart",
        element: <NoItemsInCart />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
