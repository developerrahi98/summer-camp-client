import { useEffect, useState } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("popularclass.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div>
        <Helmet>
            <title>JAM ACADEMY | Classes</title>
        </Helmet>
      <div className="my-16 text-center">
        <h2 className="text-red-600 text-2xl font-bold">Our Classes</h2>
        <h1 className="text-[#0C4B65] font-extrabold text-4xl my-4 ">
          Most Popular Classes
        </h1>
        <p className="text-black w-1/2 mx-auto">
          Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
          euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
          ligula.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 ml-20 my-20">
        {
            classes.map(item => <ClassesCard
                key={item.id}
                item={item}
                ></ClassesCard>)
        }
      </div>
    </div>
  );
};

export default Classes;
