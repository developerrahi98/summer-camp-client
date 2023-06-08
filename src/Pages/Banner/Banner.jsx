import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-awesome-slider/dist/styles.css";
import img from "../../assets/Banner/volumetric-musical-background-with-treble-clef-notes-generative-ai.jpg";
import img2 from "../../assets/Banner/volumetric-musical-background-with-treble-clef-notes-generative-ai (1).jpg";
import img3 from "../../assets/Banner/phone-with-music-icon-headphones-blurred-background-music-listening-concept-copy-space.jpg";
import img4 from "../../assets/Banner/closeup-dj-working-blue-light.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
