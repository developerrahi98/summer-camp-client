import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/NicePng_music-logo-png_1173833.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import DarkMode from "../../../Component/DarkMode/DarkMode";

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
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        {user ? <Link to="/dashboard/mycart">Dashboard</Link> : <span></span>}
      </li>
    </>
  );
  return (
    <div className="navbar text-yellow-500 font-bold  bg-[#0C4B65]">
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
        <DarkMode></DarkMode>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navbarItems}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <>
              <div className="flex gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-ghost"
                >
                  <Link to="/login">Log Out</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <button className="btn btn-active btn-ghost">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
