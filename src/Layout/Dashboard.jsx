import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#0C4B65]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  text-yellow-500">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclasses">
                   Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                   Manage Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaShoppingCart></FaShoppingCart> All Users
                </NavLink>
              </li>{" "}
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                </NavLink>
              </li>{" "}
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructor">Instructor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
