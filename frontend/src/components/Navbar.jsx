import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu2Fill } from "react-icons/ri";
import trigger from "../../helper/trigger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  // const navAll = document.querySelectorAll(".nav1");

  // navAll.forEach(function (link) {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const id = e.target.getAttribute("href");
  //     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  //   });
  // });

  return (
    <nav className="w-full">
      <div className="container mx-auto flex items-center justify-between px-2 py-6 font-syne">
        <img src="./logo.svg" alt="logo" />
        <ul
          className="hidden gap-5 text-[16px] font-medium lg:flex"
          onClick={(e) => trigger(e)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#form">Contact</a>
          </li>
        </ul>
        <div>
          <button
            className="hidden rounded-md border-2 border-solid border-black px-8 py-3 font-medium transition-all duration-300 ease-in hover:border-slate-300 hover:bg-black hover:text-white lg:block"
            href="#form"
            onClick={(e) => trigger(e)}
          >
            Be a Donor
          </button>
        </div>
        <div className="z-10 md:block lg:hidden">
          <button className="text-3xl" onClick={() => setIsOpen((s) => !s)}>
            {!isOpen ? <GrClose /> : <RiMenu2Fill />}
          </button>
          {!isOpen && (
            <div className="absolute right-0 top-0 z-[-20] h-lvh w-full bg-slate-50">
              <ul
                onClick={(e) => {
                  trigger(e);
                  setIsOpen((s) => !s);
                }}
                className="flex h-full w-full flex-col items-center justify-center gap-6"
              >
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#program">Program</a>
                </li>
                <li>
                  <a href="#form">Contact</a>
                </li>
                <li>
                  <button
                    className="rounded-md border-2 border-solid border-black px-8 py-3"
                    href="#form"
                  >
                    Be a Donor
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
