import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./compnents/Main.js/Main";
import Myreview from "./compnents/Navpage/Myreview";
import Blogs from "./compnents/Navpage/Blogs";
import Addservice from "./compnents/Navpage/Addservice";
import Login from "./compnents/Login/Login";
import Register from "./compnents/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/myreview",
          element: <Myreview></Myreview>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/addservice",
          element: <Addservice></Addservice>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
