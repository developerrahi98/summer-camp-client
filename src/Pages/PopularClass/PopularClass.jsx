import { BanknotesIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

const PopularClass = ({ item }) => {
  const { name,  image, duration, price, total_students } = item;
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#0C4B65] text-2xl  font-extrabold"><span className="text-red-600">{name} </span>Classes</h2>
          <p className="text-[#0C4B65]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, delectus!</p>
          <p className="text-[#0C4B65] font-bold">Students : {total_students}</p>
          <p className="text-[#0C4B65] font-bold flex gap-2"><CalendarDaysIcon className="h-6 w-6 text-red-500" />{duration}</p>
          <p className="text-[#0C4B65] font-bold flex gap-2">  <BanknotesIcon className="h-6 w-6 text-red-500" />{price}$</p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellow-500 text-white font-bold border-0">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
