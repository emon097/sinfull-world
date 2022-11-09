import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { details, image, price, title, _id } = service;
  const [review, setReview] = useState([]);
  //   review
  fetch("http://localhost:5000/review")
    .then((res) => res.json())
    .then((data) => setReview(data));
  //   review

  const handlereview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const reviews = { review };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(reviews);
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
        <form onSubmit={handlereview}>
          <input
            type="text"
            name="review"
            placeholder="Type here"
            className="input bg-slate-400 relative text-white w-1/2"
          />
          <button className="btn btn-success text-white"> Review </button>
        </form>
      </div>
      <div>
        {review.map((revie) => (
          <Review key={revie._id} title={title} revie={revie}></Review>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
