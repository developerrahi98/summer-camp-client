import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClasses from "../Pages/Dashboard/AddClasses/AddClasses";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/secret",
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path:"/instructor",
          element:<Instructors></Instructors>
        },
        {
          path:"/classes",
          element:<Classes></Classes>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:"mycart",
          element:<MyCart></MyCart>
        },
        {
          path:"allusers",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addclasses',
          element:<AdminRoute><AddClasses></AddClasses></AdminRoute>

        },
        {
          path:'manageclasses',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>

        }
      ]
    },
    {
        path: "*",
        element:<Error></Error>
    },
  ]);