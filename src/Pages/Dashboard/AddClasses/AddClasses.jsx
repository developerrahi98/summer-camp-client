import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";


const img_hosting_token = "0bf765d1e7b50f49b510b3c27c690d97";

const AddClasses = () => {
    const [axiosSecure] =useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url,{
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success) {
            const imgUrl = imgResponse.data.display_url;
            const {name, price, details} = data;
            const newItem = {name, price: parseFloat(price), details, image:imgUrl}
            console.log(newItem);
            axiosSecure.post('/classes', newItem)
            .then(data => {
                console.log('after posting data', data.data);
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })

  };
  console.log(errors);
  console.log(img_hosting_token);
  return (
    <div className="w-1/2 mx-auto h-full my-10">
      <h1 className="text-3xl font-bold text-[#0C4B65]  text-center ">Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="class name"
            name="name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Price</span>
          </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="details"
            name="details"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Pick a file</span>
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true })}
          />
        </div>
        <input className="btn btn-small my-5 bg-yellow-500 text-red-800 font-bold" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClasses;
