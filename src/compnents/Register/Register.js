import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import login from "../media/undraw_modern_design_re_dlp8.svg";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.error(err.message);
      });
    console.log(name, email, photo, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center border rounded-lg bg-slate-100 p-10 lg:text-left">
            <p className="py-6 font-semibold text-4xl">
              If you want to use our service, <br /> then Register and you have
              an Already Account, <br /> You Can Login Your Account
            </p>
            <img src={login} alt="" />
          </div>
          <div className="card p-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <form onSubmit={handlelogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Full Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Profile Photo </span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Your Photo Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
            <p>
              You Have an Already at account Please
              <Link className="text-red-600 m-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
