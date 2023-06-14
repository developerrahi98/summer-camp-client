import { FaTrashAlt } from "react-icons/fa";
import useClass from "../../../Hooks/useClass";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcApprove, FcFeedback } from "react-icons/fc";

const ManageClasses = () => {
  const [classes, refetch] = useClass();
  const[axiosSecure]= useAxiosSecure();
  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
           axiosSecure.delete(`/classes/${item._id}`)
           .then(res=>{
            console.log(res.data);
            if(res.data.deletedCount > 0) {
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
           })
        }
      })
  }
  return (
    <div className="w-full h-full my-10">
      <h1 className="text-3xl font-bold text-[#0C4B65]  text-center my-8">Manage All Classes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Seats</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.seats}</td>
                <td>
                  <button className="btn btn-ghost text-xl"><FcApprove></FcApprove></button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-500 text-white "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost text-xl"><FcFeedback></FcFeedback></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
