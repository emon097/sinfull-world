import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import useTitle from "../../Hooks/useTitle";
import login from "../media/undraw_modern_design_re_dlp8.svg";
const Register = () => {
  useTitle("Register");
  const { createUser, updateall, crateaccountgoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigated = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigated(from, { replace: true });
        updateall(name, photo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const googleaccounthandler = () => {
    crateaccountgoogle().then((result) => {
      const user = result.user;
      navigated(from, { replace: true });
      console.log(user);
    });
  };
  return (
    <div>
      <div className="hero p-10 min-h-screen bg-base-200 bg-[url('https://images.pexels.com/photos/10388108/pexels-photo-10388108.jpeg?auto=compress&cs=tinysrgb&w=1600')]  ">
        <div className="hero-content flex-col lg:flex-row">
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
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="divider">OR</div>
                  <div className="grid h-12 card bg-base-300 rounded-box place-items-center">
                    <button onClick={googleaccounthandler}>
                      <p className="flex items-center justify-center ">
                        <p className="mx-2 font-semibold">Google</p>{" "}
                        <FaGoogle></FaGoogle>
                      </p>
                    </button>
                  </div>
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
