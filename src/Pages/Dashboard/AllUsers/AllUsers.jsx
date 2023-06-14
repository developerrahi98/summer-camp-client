import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                title: `${user.name} is Admin Now`,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
    })
  };
  const handleDelete = (user) => {};
  return (
    <div className="w-full h-full my-10">
      <Helmet>
        <title>JAM ACADEMY | All Users</title>
      </Helmet>
      <h3 className="text-3xl my-5 font-bold text-[#0C4B65]  text-center">Total Users : {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className="btn btn-ghost bg-orange-500 text-white "><FaChalkboardTeacher></FaChalkboardTeacher></button></td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-500 text-white "
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-500 text-white "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
