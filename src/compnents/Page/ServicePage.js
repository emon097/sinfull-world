import React, { useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const ServicePage = () => {
  const [desplayCategory, setDesplayCategory] = useState([]);

  fetch("http://localhost:5000/addService")
    .then((res) => res.json())
    .then((data) => setDesplayCategory(data));

  return (
    <div className="mt-36">
      <h1 className="text-center text-5xl mb-6 p-3 text-white rounded bg-slate-600 mx-60">
        {" "}
        Our PhotoGraphy Package{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {desplayCategory.map((desplay) => (
          <Service key={desplay._id} desplay={desplay}></Service>
        ))}
      </div>
      <div className="flex justify-center">
        <Link className="btn btn-success text-white">Add Service</Link>
      </div>
    </div>
  );
};

export default ServicePage;
