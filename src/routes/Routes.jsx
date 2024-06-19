import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Signup from "../Pages/signup/Signup";
import About from "../Pages/about/About";
import Contact from "../Pages/contact/Contact";
import Notice from "../Pages/notice/Notice";
import Alumni from "../Pages/alumni/Alumni";
import Events from "../Pages/events/Events";
import Committee from "../Pages/Committee/Committee";

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
          path: "/notice",
          element: <Notice />,
          // loader: () => fetch("http://localhost:3000/shop"),
        },
        {
          path: "/events",
          element: <Events />,
          // loader: () => fetch("http://localhost:3000/shop"),
        },
        {
          path: "/committee",
          element: <Committee />,
          // loader: () => fetch("http://localhost:3000/blog"),
        },
        {
          path: "/alumni",
          element: <Alumni />,
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