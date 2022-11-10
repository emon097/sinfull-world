import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { loginuser, crateaccountgoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigated = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const loginhandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginuser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigated(from, { replace: true });
    });
    console.log(email, password);
  };
  const googleaccounthandler = () => {
    crateaccountgoogle().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-full bg-[url('https://images.pexels.com/photos/1130436/pexels-photo-1130436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
        <div className="hero-content ">
          <div className="text-center rounded-lg  p-10 lg:text-left"></div>
          <div className="card p-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <form onSubmit={loginhandle}>
              <div className="card-body">
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
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
              {" "}
              You Have no Account Please{" "}
              <Link className="text-red-600" to="/register">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
