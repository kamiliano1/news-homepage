import { useState } from "react";
import companyLogo from "/logo.svg";
import closeNavIcon from "/icon-menu-close.svg";
import openNavIcon from "/icon-menu.svg";
export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="md:mb-16">
      <div className="navbar text-lg pt-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex">
          <img
            src={companyLogo}
            alt="company Logo"
            className="mr-auto h-7 md:h-auto"
          />
          <img
            src={openNavIcon}
            alt="open Nav"
            className=" py-2 sm:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
          />
        </div>
        <ul className="flex space-x-14">
          <li>
            <a href="#" aria-current="true">
              Home
            </a>
          </li>
          <li>
            <a href="#" aria-current="false">
              New
            </a>
          </li>
          <li>
            <a href="#" aria-current="false">
              Popular
            </a>
          </li>
          <li>
            <a href="#" aria-current="false">
              Trending
            </a>
          </li>
          <li>
            <a href="#" aria-current="false">
              Categories
            </a>
          </li>
        </ul>
      </div>
      <div
        className="flex sm:translate-x-full primary-navigation
      fixed top-0 left-0 right-0 bottom-0 "
        aria-expanded={openNav}
      >
        <span className="w-[30%]"></span>
        <div className="flex flex-col w-[70%] text-xl font-regular bg-white space-y-5 pl-4 py-5 bg-offWhite">
          <img
            src={closeNavIcon}
            alt="close Nav"
            className="self-end pr-7 cursor-pointer mb-20 w-16"
            onClick={() => setOpenNav(false)}
          />
          <ul className="space-y-4">
            <li onClick={() => setOpenNav(false)}>
              <a href="#" aria-current="true">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="false"
                onClick={() => setOpenNav(false)}
              >
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="false"
                onClick={() => setOpenNav(false)}
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="false"
                onClick={() => setOpenNav(false)}
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="false"
                onClick={() => setOpenNav(false)}
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
