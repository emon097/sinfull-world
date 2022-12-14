import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Authprovider/Authprovider";
import useTitle from "../../Hooks/useTitle";
import MyEmailReview from "./MyEmailReview";

const Myreview = () => {
  useTitle("My Review");
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch(`https://sinfull-world-server.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://sinfull-world-server.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Succesfully Deleted");
          const remaining = myReview.filter((odr) => odr._id !== id);
          setMyReview(remaining);
        }
      });
  };

  return (
    <div>
      {myReview?.length === 0 ? (
        <p className="flex text-red-600 justify-center text-4xl font-bold">
          No Review Found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-14">
          {myReview.map((myrev) => (
            <MyEmailReview
              key={myrev._id}
              handleDelete={handleDelete}
              myrev={myrev}
            ></MyEmailReview>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myreview;
