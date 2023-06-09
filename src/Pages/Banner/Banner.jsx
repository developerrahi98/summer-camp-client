import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img from "../../assets/Banner/volumetric-musical-background-with-treble-clef-notes-generative-ai.jpg";
import img2 from "../../assets/Banner/volumetric-musical-background-with-treble-clef-notes-generative-ai (1).jpg";
import img3 from "../../assets/Banner/phone-with-music-icon-headphones-blurred-background-music-listening-concept-copy-space.jpg";
import img4 from "../../assets/Banner/closeup-dj-working-blue-light.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Banner = () => {
  return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={1000}
  >
    <div data-src={img} />
    <div data-src={img2} />
    <div data-src={img3} />
    <div data-src={img4} />
  </AutoplaySlider>
  );
};

export default Banner;
