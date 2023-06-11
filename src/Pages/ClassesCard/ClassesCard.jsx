import { BanknotesIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const ClassesCard = ({ item }) => {
  const {_id, image, name, instructorName, seats, price, duration } = item;
  const [cart,refetch] = useCart();
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSelectClass = (item) =>{
    console.log(item);
    if(user && user.email){
        const selectedItem = {selectedItemId:_id,name,image,price,email:user.email}
        fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your class have been selected',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else {
        Swal.fire({
            title: 'Please Login to select the class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login')
            }
          })
    }
  }
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#0C4B65] text-2xl  font-extrabold">
            <span className="text-red-600">{name} </span>Classes
          </h2>
          <p className="text-[#0C4B65]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            delectus!
          </p>
          <p className="text-[#0C4B65] font-bold">
            Available Seats : {seats}
          </p>
          <p className="text-[#0C4B65] font-bold">
            Instructor : {instructorName}
          </p>
          <p className="text-[#0C4B65] font-bold flex gap-2">
            <CalendarDaysIcon className="h-6 w-6 text-red-500" />
            {duration}
          </p>
          <p className="text-[#0C4B65] font-bold flex gap-2">
            {" "}
            <BanknotesIcon className="h-6 w-6 text-red-500" />
            {price}$
          </p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleSelectClass(item)} className="btn bg-yellow-500 text-white font-bold border-0">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
