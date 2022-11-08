import React from "react";
import Carusel from "../Page/Carusel";

const Home = () => {
  return (
    <div className="mx-20 my-20">
      <div className="grid grid-cols-2">
        <div className="my-32 mx-32">
          <h1 className="text-5xl underline font-serif font-bold">
            {" "}
            Nature And Wild Photography
          </h1>
          <p className="mt-8 text-3xl">
            “We don’t own the planet Earth, we belong to it. And we must share
            it with our wildlife.” ~{" "}
            <span className="font-semibold text-orange-600">Steve Irwin</span>
          </p>
        </div>
        <div>
          <Carusel></Carusel>
        </div>
      </div>
    </div>
  );
};

export default Home;
