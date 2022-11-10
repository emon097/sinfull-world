import React from "react";
import toast from "react-hot-toast";

const MyEmailReview = ({ myrev, handleDelete }) => {
  const { name, photo, review, title, _id } = myrev;
  console.log(myrev);

  return (
    <div className="mt-96">
      {myrev.myrev ? (
        <div class="py-12  px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
          <div class="flex flex-col justify-start items-start w-full space-y-8">
            <div class="flex justify-start items-start"></div>
            <div class="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 p-8">
              <div class="flex flex-col md:flex-row justify-between w-full">
                <div class="flex flex-row justify-between items-start">
                  <p class="text-xl md:text-2xl font-medium leading-normal text-gray-800 dark:text-white">
                    {title ? title : "title undefined"}
                  </p>
                </div>
              </div>
              <div id="menu" class="md:block">
                <p class="mt-3 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6">
                  {review}
                </p>

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
          <div>
            <button
              onClick={() => handleDelete(_id)}
              className="btn mr-10 btn-square btn-error"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        "No found Review"
      )}
    </div>
  );
};

export default MyEmailReview;
