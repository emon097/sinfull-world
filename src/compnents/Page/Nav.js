import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="navbar bg-black text-white p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addservice">Add Service</Link>
              </li>

              <li>
                <Link to="/myreview"> My Review </Link>
              </li>
              <li>
                <Link to="/blogs"> {user?.displayName} </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" font-mono normal-case text-3xl">
            SINFULL WORLD
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to="/addservice">Add Service</Link>
                </li>
                <li>
                  <Link to="/myreview"> My Review </Link>
                </li>
              </>
            ) : (
              <ul>
                <li>
                  {" "}
                  <p>Login And You Get Our All Services</p>{" "}
                </li>
              </ul>
            )}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-8">
          {user?.uid ? (
            <Link onClick={handlelogout} className="btn btn-error text-white ">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn btn-success text-white ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
