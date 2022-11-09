import React, { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const Review = ({ revie, title }) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <article>
        <div class="flex items-center mb-4 space-x-4">
          <img class="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
          <div class="space-y-1 font-medium dark:text-dark">
            <p> dsid {user?.displayName} </p>
          </div>
        </div>
        <div class="flex items-center mb-1">
          <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-dark">
            Photography Category {title}
          </h3>
        </div>
        <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
          {revie.review}
        </p>
      </article>
    </div>
  );
};

export default Review;
