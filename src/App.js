import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./compnents/Main.js/Main";
import Myreview from "./compnents/Navpage/Myreview";
import Blogs from "./compnents/Navpage/Blogs";
import Addservice from "./compnents/Navpage/Addservice";
import Login from "./compnents/Login/Login";
import Register from "./compnents/Register/Register";
import Home from "./compnents/Home/Home";
import SeeAll from "./compnents/Share/SeeAll";
import ServiceDetails from "./compnents/Share/ServiceDetails";
import PrivetRoute from "./compnents/PrivetRoute/PrivetRoute";
import UpdateUser from "./compnents/UpdateUser/UpdateUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/myreview",
          element: (
            <PrivetRoute>
              <Myreview></Myreview>
            </PrivetRoute>
          ),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/addservice",
          element: (
            <PrivetRoute>
              <Addservice></Addservice>
            </PrivetRoute>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/service",
          element: <SeeAll></SeeAll>,
        },
        {
          path: "/update/:id",
          loader: ({ params }) =>
            fetch(
              `https://sinfull-world-server.vercel.app/review/${params.id}`
            ),
          element: <UpdateUser></UpdateUser>,
        },
        {
          path: "/service/:id",
          loader: ({ params }) =>
            fetch(
              `https://sinfull-world-server.vercel.app/service/${params.id}`
            ),
          element: <ServiceDetails></ServiceDetails>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
