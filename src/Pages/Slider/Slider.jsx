import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import slider from "../../assets/Slider/slider1 (1).jpg"
import slider2 from "../../assets/Slider/slider1 (2).jpg"
import slider3 from "../../assets/Slider/slider1 (3).jpg"
import slider4 from "../../assets/Slider/slider1 (4).jpg"
import slider5 from "../../assets/Slider/slider1 (5).jpg"

const Slider = () => {
  return (
    <Flicking
      align="prev"
      circular={true}
      onMoveEnd={(e) => {
        console.log(e);
      }}
    >
      <div className="panel"><img className="w-1/4" src={slider} alt="" /></div>
      <div className="panel"><img className="w-1/4" src={slider2} alt="" /></div>
      <div className="panel"><img className="w-1/4" src={slider3} alt="" /></div>
    </Flicking>
  );
};

export default Slider;
