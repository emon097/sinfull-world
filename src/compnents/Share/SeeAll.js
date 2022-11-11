import React, { useState } from "react";
import useTitle from "../../Hooks/useTitle";
import SeeAlllService from "./SeeAlllService";

const SeeAll = () => {
  useTitle("SeeAll");
  const [seeAll, setSeeAll] = useState([]);

  fetch("https://sinfull-world-server.vercel.app/service")
    .then((res) => res.json())
    .then((data) => setSeeAll(data));

  return (
    <div>
      {seeAll?.length === 0 ? (
        <div className="my-52 px-40 w-full flex justify-center">
          <progress className="progress "></progress>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10  mx-28 my-20 ">
          {seeAll.map((all) => (
            <SeeAlllService key={all._id} all={all}></SeeAlllService>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeeAll;
