import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import Review from "./Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { details, image, price, title, _id } = service;
  const [review, setReview] = useState([]);
  //   review
  useEffect(() => {
    fetch(`https://sinfull-world-server.vercel.app/review?services=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [_id]);
  //   review
  const handlereview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const email = user?.email || "unregister";
    const name = user?.displayName || "unregister";
    const photo = user?.photoURL;
    const reviews = { services: _id, review, email, name, photo, title };
    fetch("https://sinfull-world-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="my-36">
      <div className="flex justify-center">
        <img className="w-1/2 rounded" src={image} alt="" />
      </div>
      <div className="flex justify-center my-10">
        <p className="text-3xl font-bold"> {title} </p>
      </div>
      <div className="flex-wrap mx-44  my-12">
        <p> Service Details {details}</p>
        <p className="bg-red-500 p-3 font-bold text-white w-28 mt-10 flex justify-center">
          {" "}
          Service Fee ${price}
        </p>
      </div>
      <div className="mx-40">
        {user?.uid ? (
          <>
            <form onSubmit={handlereview}>
              <input
                type="text"
                name="review"
                placeholder="Write Your Review"
                className="input bg-slate-300  text-black w-1/2"
              />
              <button className="btn btn-success text-white"> Review </button>
            </form>
          </>
        ) : (
          <p className="text-2xl">
            Got To login And Set Review{" "}
            <Link
              className="bg-emerald-500 text-white p-2 rounded-lg "
              to="/login"
            >
              Login
            </Link>
          </p>
        )}
      </div>
      <div className="overflow-y-auto mt-20 rounded-lg h-96 mx-40 ">
        {review.map((revie) => (
          <Review key={revie._id} revie={revie}></Review>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
