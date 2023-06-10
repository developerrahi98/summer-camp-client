import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img2 from "../../assets/Banner/acoustic-guitar-chair-close-up-brown-guitar-black-wall.jpg";
import img3 from "../../assets/Banner/creative-illustration-with-electric-guitar-generative-ai.jpg";
import img4 from "../../assets/Banner/male-musician-playing-acoustic-guitar-dark-room-copy-space.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
      >
        <div
          style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover" }}
        >
          <div className="text-center">
            <h3 className="text-yellow-400 font-extrabold text-6xl text-center">
              Playing Guitar
            </h3>
            <h1 className="text-white my-6 font-extrabold text-9xl text-center">
              Realy Easy
            </h1>
            <button className="btn bg-red-600 text-white  border-0 mt-10 font-bold px-8">
              Read More
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }}
        >
          <div className="text-center">
            <h3 className="text-yellow-400 font-extrabold text-6xl text-center">
              Playing Guitar
            </h3>
            <h1 className="text-white font-extrabold my-6 text-9xl text-center">
              Realy Easy
            </h1>
            <button className="btn bg-red-600 text-white border-0 mt-10 font-bold px-8">
              Read More
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img4})`, backgroundSize: "cover" }}
        >
          <div className="text-center">
            <h3 className="text-yellow-400 font-extrabold text-6xl text-center">
              Playing Guitar
            </h3>
            <h1 className="text-white font-extrabold text-9xl my-6 text-center">
              Realy Easy
            </h1>
            <button className="btn bg-red-600 text-white border-0 mt-10 font-bold px-8">
              Read More
            </button>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
