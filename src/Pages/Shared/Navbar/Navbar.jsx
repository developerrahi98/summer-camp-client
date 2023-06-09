import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/NicePng_music-logo-png_1173833.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import {getAuth}  from "firebase/auth"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navbarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Instructors</a>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed  z-10 mt-0 text-white font-bold bg-opacity-30 bg-black">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl "
          >
            {navbarItems}
          </ul>
        </div>
        <img src={logo} className="h-20 ml-8" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navbarItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end mr-7">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {user ? (
              <>
                <div className="w-10 rounded-full">
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    <img />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="btn btn-active btn-ghost"><Link to="/login">Login</Link></button>
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;