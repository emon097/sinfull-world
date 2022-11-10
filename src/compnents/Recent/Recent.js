import React, { useEffect, useState } from "react";
import Shoot from "./Shoot";

const Recent = () => {
  const [shoot, setShoot] = useState([]);
  useEffect(() => {
    fetch("https://sinfull-world-server.vercel.app/extrashoot")
      .then((res) => res.json())
      .then((data) => setShoot(data));
  }, []);
  return (
    <div>
      <h1 className="flex bg-zinc-700 text-white mx-24 justify-center text-4xl font-serif  mt-28 mb-3 p-3">
        {" "}
        My Recent Shoot{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-24 gap-6 ">
        {shoot.map((recent) => (
          <Shoot key={recent._id} recent={recent}></Shoot>
        ))}
      </div>
    </div>
  );
};

export default Recent;
