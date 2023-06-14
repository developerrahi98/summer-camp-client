import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) =>{
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
          fetch(`http://localhost:5000/carts/${item._id}`,{
            method: 'DELETE',
          })
           .then(res=>res.json())
           .then(data=>{
            if(data.deletedCount > 0) {
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
    <div>
      <Helmet>
        <title>JAM ACADEMY | My Cart</title>
      </Helmet>
      <div className="flex gap-10 justify-evenly">
        <h2 className="text-[#0C4B65] text-3xl font-extrabold">
          Total Classes : {cart.length}
        </h2>
        <h2 className="text-[#0C4B65] text-3xl font-extrabold">
          Total Price : {total}
        </h2>
       <Link to='/dashboard/payment'> <button className="btn border-0 px-6 bg-yellow-500 font-bold text-white">
          Pay
        </button></Link>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table text-[#0C4B65]">
          {/* head */}
          <thead className="text-[#0C4B65]">
            <tr>
              <th>
                #
              </th>
              <th>Class</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index) =>   <tr 
                    key={cart._id}
                >
                <th>
                  {index+1}
                </th>
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
                <td>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <th>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-500 text-white "><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
