import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import MyEmailReview from "./MyEmailReview";

const Myreview = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [user?.email]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-14">
        {myReview.map((myrev) => (
          <MyEmailReview key={myrev._id} myrev={myrev}></MyEmailReview>
        ))}
      </div>
    </div>
  );
};

export default Myreview;
