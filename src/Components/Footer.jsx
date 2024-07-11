import { ImLocation2 } from "react-icons/im";
import pupc from "../images/pupc.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaPhoneVolume } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* First Column */}
        <div className="flex flex-col items-center">
          <img src={pupc} alt="Logo" className="w-28 mb-4" />
          <p className="mb-4">
          PUPC is the most established and dynamic club of our University. We come together to explore all areas of Computer Science. Join us to learn more and be a part of our journey.
          </p>
         
        </div>

        {/* Second Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div>
         <h2 className="text-xl font-bold  ">Important Links</h2>
         <div className="h-[0.5px] w-20 bg-primary my-4"></div>
          <ul>
            <li className="mb-2">
              <Link to={"/member"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Become a member</Link>
            </li>
            <li className="mb-2">
              <Link to={"/notice"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Notice</Link>
            </li>
            <li className="mb-2">
              <Link to={"/events"} className="hover:pl-3 ease-in duration-150 hover:text-primary">News & Events</Link>
            </li>
            <li className="mb-2">
              <Link to={"/achievements"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Achievements</Link>
            </li>
          </ul>
         </div>

         <div>
         <h2 className="text-xl font-bold ">Quick Links</h2>
         <div className="h-[0.5px] w-20 bg-primary my-4"></div>
          <ul>
            <li className="mb-2">
              <Link to={"/about"} className="hover:pl-3 ease-in duration-150 hover:text-primary">About</Link>
            </li>
            <li className="mb-2">
              <Link to={"/committee"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Committee</Link>
            </li>
            <li className="mb-2">
              <Link to={"/alumni"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Our Alumni</Link>
            </li>
            <li className="mb-2">
              <Link to={"/achievements"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Achievements</Link>
            </li>
            <li className="mb-2">
              <Link to={"/gallery"} className="hover:pl-3 ease-in duration-150 hover:text-primary">Gallery</Link>
            </li>
          </ul>
         </div>
        </div>

        {/* Third Column */}
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="h-[0.5px] w-20 bg-primary my-4"></div>
          <p className="mb-2 flex gap-3 items-center">
            <ImLocation2 className="text-2xl " />Rangpur Road, Baghopara,
            Gokul, Bogura-5800, Bangladesh
          </p>
          <a
            href="mailto:programmingclub.pub@gmail.com"
            className="mb-2 flex gap-3 items-center"
          >
            <MdMarkEmailUnread className="text-2xl " />programmingclub.pub@gmail.com
          </a>
          <p className="mb-2 flex gap-3 items-center"><FaPhoneVolume className="text-2xl " /> (123) 456-7890</p>
          <a
            href="https://www.facebook.com/PUPCofficial"
            className="mt-2 flex gap-3 items-center"
          >
             <FaFacebook className="text-2xl " /> PUPCofficial
          </a>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between px-5">
          <div>Copyright &copy; {currentYear} by PUPC. All Rights Reserved.</div>
          <div>Created by Ashik, CSE 20th Batch</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
