import React from "react";
import { FaEye, FaTrophy, FaUserFriends } from "react-icons/fa";

const ExtraFeture = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our</span>
            </span>{" "}
            Number of Achivement
          </h2>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center ">
              <FaEye className="w-9 h-9 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20"></FaEye>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Daily Visitor</h6>

            <p
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              10,000
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center">
              <FaUserFriends className="w-9 h-9 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20"></FaUserFriends>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              {" "}
              Our Number Of User
            </h6>

            <p
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              30,000
            </p>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center ">
              <FaTrophy className="w-9 h-9 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20"></FaTrophy>
            </div>
            <h6 className="mb-2 font-semibold leading-5"> We Win</h6>

            <p
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Three Category Award
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeture;
