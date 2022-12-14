import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const Service = ({ desplay }) => {
  const { image, title, price, details, _id } = desplay;
  return (
    <div>
      <div class="w-full  bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div href="#">
          <PhotoProvider>
            <PhotoView src={image}>
              <img className="w-full" src={image} alt="" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div class="px-5 pb-5">
          <p href="#">
            <h5 class="text-2xl font-semibold p-2 mt-10 mx-10 tracking-tight text-white bg-red-500">
              {title}
            </h5>
          </p>
          <div href="#">
            <p class="text-xl mt-7 font-semibold tracking-tight text-gray-900 dark:text-white">
              {details.slice(0, 100) + "...More"}
            </p>
          </div>
          <div class="flex mb-7 justify-between mt-7 items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/service/${_id}`}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
