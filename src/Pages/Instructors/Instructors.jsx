import { useEffect, useState } from "react";
import InstructorCard from "../InstructorCard/InstructorCard";

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
      fetch("popularteacher.json")
        .then(res => res.json())
        .then(data =>{
          setTeachers(data)
        })
    }, []);
  return (
    <div className="bg-white">
      <div className="my-10 text-center">
        <h2 className="text-red-600 text-2xl font-bold">Our Team</h2>
        <h1 className="text-[#0C4B65] font-extrabold text-4xl my-4 ">
          Meet Our Teachers
        </h1>
        <p className="text-black w-1/2 mx-auto">
          Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
          euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
          ligula.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 p-12">
        {
              teachers.map(teacher => <InstructorCard
                key={teacher.id}
                teacher={teacher}
              ></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;