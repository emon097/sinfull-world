import React, { useState } from "react";
import Service from "./Service";

const ServicePage = () => {
  const [desplayCategory, setDesplayCategory] = useState([]);
  fetch("http://localhost:5000/addService")
    .then((res) => res.json())
    .then((data) => setDesplayCategory(data));
  return (
    <div>
      {desplayCategory.map((desplay) => (
        <Service key={desplay._id} desplay={desplay}></Service>
      ))}
    </div>
  );
};

export default ServicePage;
