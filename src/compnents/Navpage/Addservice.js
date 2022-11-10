import { fromJSON } from "postcss";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const Addservice = () => {
  const handleaddservice = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const details = form.details.value;

    const allDetails = { title, image, price, details };
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        toast.success("successFully Added Service");
      });
  };
  return (
    <div className="flex justify-center w-full bg-repeat-round bg-[url('https://images.pexels.com/photos/8956431/pexels-photo-8956431.jpeg?auto=compress&cs=tinysrgb&w=1600')] ">
      <form
        onSubmit={handleaddservice}
        class="w-full mb-96 max-w-lg bg-gray-900 p-10 rounded-xl mt-10"
      >
        <h1 className="text-white text-2xl font-bold mb-10 text-center">
          {" "}
          Add Service on Home{" "}
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Service Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Service Title"
              required
              name="title"
            />
          </div>
        </div>
        <div class="flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Image
            </label>
            <input
              class="appearance-none block w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Service Image"
              required
              name="image"
            />
          </div>
          <div class="w-full mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-zip"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              required
              placeholder="$Price"
              name="price"
            />
          </div>
        </div>
        <div class="flex flex-wrap mt-5 -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              Your Service Details
            </label>
            <textarea
              name="details"
              className="appearance-none block w-full h-56 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Post Details"
              required
            ></textarea>
          </div>
        </div>
        <button className="btn btn-success mt-4 text-white">
          {" "}
          Add Service
        </button>
      </form>
    </div>
  );
};

export default Addservice;
