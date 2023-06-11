const InstructorCard = ({ teacher }) => {
  const { name, email, image } = teacher;
  return (
    <div className="card lg:card-side bg-[#0C4B65] shadow-xl">
      <figure>
        <img
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body mt-10">
        <h2 className="card-title text-yellow-500 font-extrabold">{name}</h2>
        <p className="text-yellow-500">{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
