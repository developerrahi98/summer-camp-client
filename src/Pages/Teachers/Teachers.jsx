import { useEffect, useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("popularteacher.json")
      .then(res => res.json())
      .then(data =>{
        const popularTeacher = data.filter(teacher => teacher.total_students > 40);
        setTeachers(popularTeacher)
      })
  }, []);

  return (
    <section className="my-10">
      <div className="my-16 text-center">
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
      <div className="grid grid-cols-3 gap-3 ml-24">
        {
            teachers.map( teacher => <TeacherCard
                key={teacher.id}
                teacher={teacher}
            ></TeacherCard>)
        }
      </div>
    </section>
  );
};

export default Teachers;
