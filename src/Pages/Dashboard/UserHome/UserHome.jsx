import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Fade } from "react-awesome-reveal";
import 'animate.css';

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full h-full mt-10">
      <Fade>
        <h2 className="text-3xl font-bold text-[#0C4B65]  text-center animate__animated animate__bounce">
          Hi Welcome Back, {user.displayName}
        </h2>
      </Fade>
    </div>
  );
};

export default UserHome;
