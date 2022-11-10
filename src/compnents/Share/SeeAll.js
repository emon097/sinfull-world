import React, { useState } from "react";
import SeeAlllService from "./SeeAlllService";

const SeeAll = () => {
  const [seeAll, setSeeAll] = useState([]);
  fetch("https://sinfull-world-server.vercel.app/service")
    .then((res) => res.json())
    .then((data) => setSeeAll(data));

  return (
    <div>
      <div className="grid grid-cols-3 gap-10  mx-28 my-20 ">
        {seeAll.map((all) => (
          <SeeAlllService key={all._id} all={all}></SeeAlllService>
        ))}
      </div>
    </div>
  );
};

export default SeeAll;
