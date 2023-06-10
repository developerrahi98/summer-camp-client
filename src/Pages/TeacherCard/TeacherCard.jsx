import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const TeacherCard = ({ teacher }) => {
  const { name, image, teaching_category } = teacher;
  return (
    <div>
      <div className="w-[300px] h-[300px]  border rounded-full border-yellow-600 ">
        <img
          className="w-[300px] h-[300px] p-3 rounded-full "
          src={image}
          alt=""
        />
      </div>
      <div className="text-center my-4 w-[300px] ">
        <h1 className="text-[#0C4B65] text-2xl  font-extrabold">{name}</h1>
        <h3 className="font-extrabold text-red-500 text-xl">
          {teaching_category}
        </h3>
        <div className="flex justify-evenly my-5">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
