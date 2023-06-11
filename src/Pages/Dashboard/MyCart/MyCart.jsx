import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
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
        <button className="btn border-0 px-6 bg-yellow-500 font-bold text-white">
          Pay
        </button>
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
                cart.map((row, index) =>   <tr 
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
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {row.name}
                </td>
                <td>{row.price}</td>
                <th>
                  <button className="btn btn-ghost bg-red-500 text-white "><FaTrashAlt></FaTrashAlt></button>
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
