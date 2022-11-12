import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navIndex = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link className="">Appoinment</Link>
      </li>
      <li>
        <Link className="">Review</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link className="">Contuct Us</Link>
      </li>
      <li>
        <Link>Log in</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
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
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navIndex}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navIndex}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
