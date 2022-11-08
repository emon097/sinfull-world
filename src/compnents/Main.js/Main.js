import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../compnents/Page/Nav";
import Footer from "../Page/Footer";
const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
