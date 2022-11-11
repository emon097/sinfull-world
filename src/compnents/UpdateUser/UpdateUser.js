import React, { useState } from "react";
import toast from "react-hot-toast";

import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const updateReview = useLoaderData();
  const [reviews, setReviews] = useState(updateReview);
  const { review, name, photo, title, _id } = updateReview;
  const handleupdate = (event) => {
    event.preventDefault();
    fetch(`https://sinfull-world-server.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review Updated");
        }
      });
  };
  const handleonChnage = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...reviews };
    newReview[field] = value;
    setReviews(newReview);
  };
  return (
    <div>
      <form onSubmit={handleupdate}>
        <div class="py-12  px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
          <div class="flex flex-col justify-start items-start w-full space-y-8">
            <div class="flex justify-start items-start"></div>
            <div class="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 p-8">
              <div class="flex flex-col  justify-between w-full">
                <div class="flex flex-row justify-between items-start">
                  <p class="text-xl md:text-2xl font-medium leading-normal text-gray-800 dark:text-white">
                    {title ? title : "title undefined"}
                  </p>
                </div>
              </div>
              <div id="menu" class="md:block">
                <div>
                  <textarea
                    onChange={handleonChnage}
                    defaultValue={review}
                    name="review"
                    id=""
                    className="p-7 rounded-lg text-xl"
                    cols="50"
                    rows="5"
                  ></textarea>
                </div>
                <div class="mt-6 flex justify-start items-center flex-row space-x-2.5">
                  {/* profilephoto */}
                  <div>
                    <img
                      className="w-8 rounded-full"
                      src={photo}
                      alt="girl-avatar"
                    />
                  </div>
                  <div class="flex flex-col justify-start items-start space-y-2">
                    <p class="text-base font-medium leading-none text-gray-800 dark:text-white">
                      {name}
                    </p>
                    <p class="text-sm leading-none text-gray-600 dark:text-white">
                      14 July 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn text-white mx-28  btn-success">
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
