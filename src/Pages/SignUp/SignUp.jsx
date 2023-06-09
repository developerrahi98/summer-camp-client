import { useContext } from "react";
import image from "../../assets/Login/istockphoto-1303860322-612x612.jpg"
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";


const SignUp = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
      .then(result => {
          const user = result.user;
          console.log(user);
      })
      .catch(err => {console.log(err);})
    }
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
         .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser);
            updateUser(data.name, data.photoURL)
             .then(()=>{
                reset();
                navigate("/")
             })
             .catch(err=>{console.log(err);})
         })
    }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse my-32">
          <div className="text-center lg:text-left mt-6">
            <img src={image} alt="" />
          </div>
          <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-yellow-500">
              <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    name="name"
                    className="input input-bordered bg-white"
                    {...register("name",{ required: true })}
                  />
                   {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
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
                    {...register("email",{ required: true })}
                  />
                   {errors.email && <span  className="text-red-600 font-bold">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="url"
                    name="url"
                    className="input input-bordered bg-white"
                    {...register("url",{ required: true })}
                  />
                   {errors.url && <span  className="text-red-600 font-bold">URL is required</span>}
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
                    {...register("password",{ required: true, minLength:6, maxLength:20, pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/})}
                  />
                   {errors.password?.type==="minLength" && <span  className="text-red-600 font-bold">Password must be 6 characters</span>}
                   {errors.password?.type==="pattern" && <span  className="text-red-600 font-bold">Password must have a capital letter & a special characters</span>}
                   {errors.password?.type==="maxLength" && <span  className="text-red-600 font-bold">Password must be less than 20 characters</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                     Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    name="confirmPassword"
                    className="input input-bordered bg-white"
                    {...register("confirmPassword",{ required: true })}
                  />
                   {errors.confirmPassword && <span  className="text-red-600 font-bold">Confirm your password</span>}
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
            <button onClick={handleGoogleSignIn} className="btn btn-active bg-red-700 border-0 text-white  px-16">
              Sign Up with Google
            </button>
          </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;