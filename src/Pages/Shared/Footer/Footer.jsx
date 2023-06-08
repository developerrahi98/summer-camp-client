import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/Logo/NicePng_music-logo-png_1173833.png";
import { MapPinIcon, PhoneIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-[#0C4B65] text-white text-2xl py-10 pt-32">
      <div className="bg-yellow-500 w-1/2 mx-auto flex gap-6 p-6 rounded absolute -top-5 left-96">
        <div className="font-bold">
          <p>Want to know latest news ?</p>
          <h3 className="text-[#0C4B65] text-5xl">Subscribe</h3>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              placeholder="Your email address"
              className="input input-bordered bg-white"
            />
            <span className="bg-red-700 font-bold">Subscribe</span>
          </label>
        </div>
      </div>
      <div className="container flex justify-around">
        <div className="mb-6 lg:mb-0">
          <img src={logo} alt="Website Logo" className="h-64" />
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h3 className="text-2x text-yellow-500 font-bold ">Contact Us</h3>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="/" className="flex gap-2">
                <MapPinIcon className="h-6 w-6 text-yellow-500" />
                123 Continental Street, NY, USA
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="flex gap-2">
                <PhoneIcon className="h-6 w-6 text-yellow-500" />
                803-33-5644-99
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="flex gap-2">
                <EnvelopeOpenIcon  className="h-6 w-6 text-yellow-500" />
                info@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h3 className="text-2x text-yellow-500 font-bold">Connect</h3>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="https://facebook.com">
                <FaFacebook className="mr-2 inline-block text-yellow-500" />
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="https://twitter.com">
                <FaTwitter className="mr-2 inline-block text-yellow-500" />
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="https://instagram.com">
                <FaInstagram className="mr-2 inline-block text-yellow-500 " />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} JAM ACADEMY. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
