import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Signup from "../Pages/signup/Signup";
import About from "../Pages/about/About";
import Shop from "../Pages/shop/Shop";
import Blog from "../Pages/blog/Blog";
import Contact from "../Pages/contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
          // loader: () => fetch("http://localhost:3000/house"),
        },
        {
          path: "/about",
          element: <About />,
          // loader: () => fetch("http://localhost:3000/about"),
        },
        {
          path: "/shop",
          element: <Shop />,
          // loader: () => fetch("http://localhost:3000/shop"),
        },
        {
          path: "/blog",
          element: <Blog />,
          // loader: () => fetch("http://localhost:3000/blog"),
        },
        {
          path: "/contact",
          element: <Contact />,
         
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        }

      ],
    },
  ]);