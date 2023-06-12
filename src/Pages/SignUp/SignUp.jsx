import { useContext } from "react";
import image from "../../assets/Login/istockphoto-1303860322-612x612.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import Swal from "sweetalert2";

const SignUp = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUser(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your are successfully signed up",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse my-32">
        <div className="text-center lg:text-left mt-6">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-yellow-500">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input input-bordered bg-white"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your email"
                  name="email"
                  className="input input-bordered bg-white"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  name="url"
                  className="input input-bordered bg-white"
                  {...register("url", { required: true })}
                />
                {errors.url && (
                  <span className="text-red-600">URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered bg-white"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have a upper letter, one special character &
                    one number .
                  </p>
                )}
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn bg-red-700 border-0 text-white font-bold"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
          <div className="mt-5">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-active bg-red-700 border-0 text-white  px-16"
            >
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
