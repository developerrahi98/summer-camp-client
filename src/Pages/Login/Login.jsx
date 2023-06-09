import { useContext } from "react";
import image from "../../assets/Login/4957136.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { app } from "../../Firebase/Firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

const Login = () => {
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
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        title: "You are successfully logged in",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mt-6">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-yellow-500">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered bg-white"
                />
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
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white font-bold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn bg-red-700 border-0 text-white font-bold"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <p className="font-bold text-red-700 text-center">
            <small>
              New Here ?<Link to="/signup"> Create an account.</Link>
            </small>
          </p>
          <div className="mt-5">
            <button onClick={handleGoogleSignIn} className="btn btn-active bg-red-700 border-0 text-white  px-16">
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
