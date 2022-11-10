import React, { useContext } from "react";
const Review = ({ revie }) => {
  return (
    <div>
      <div className=" p-4 my-10 rounded-lg bg-gray-600">
        <div class="flex items-center mb-4 space-x-4">
          <img class="w-10 h-10 rounded-full" src={revie.photo} alt="" />
          <div class="space-y-1 font-medium dark:text-dark">
            <p className="text-white">{revie.name} </p>
          </div>
        </div>
        <div class="flex items-center mb-1">
          <h3 class="ml-2 text-xl font-bold text-white">
            Category Name : {revie.title ? revie.title : "undefined"}
          </h3>
        </div>
        <p class="mb-2 font-semibold text-white ">{revie.review}</p>
      </div>
    </div>
  );
};

export default Review;
