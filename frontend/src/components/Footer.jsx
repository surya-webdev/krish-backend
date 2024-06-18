import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  const list = "flex gap-2 text-lg";
  return (
    <footer className="section overflow-hidden bg-black px-5 py-10 text-white">
      <div className="conatiner mx-auto">
        <div className="grid grid-cols-1 items-center justify-center gap-0 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem]"
              src="./logo.svg"
              alt="logo"
            />
            <ul className="flex gap-4 text-3xl">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="my-10 text-4xl font-bold">CONTACT</h1>
            <ul className="flex flex-col gap-4">
              <li className={list}>
                <span className="translate-y-1">
                  <FaLocationDot />
                </span>
                <span className="text-slate-50">
                  No.6, Dhanammal street, Spurtank road, chetpet Chennai 600-031
                </span>
              </li>
              <li className={list}>
                <span className="translate-y-1">
                  <FaPhone />
                </span>
                <span>+91 806 916 9691</span>
              </li>
              <li className={list}>
                <span className="translate-y-1">
                  <MdEmail />
                </span>
                <span>
                  <a href="mailto:webmaster@example.com">
                    help.krishfoundation@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10">
          <p>©2024 Krish Foundation. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
