import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div
      className={`w-0 bg-white h-0 right-0 fixed transition-all ease-sidebar-in-out delay-0 duration-300 opacity-0 z-20 ${
        showSideBar && "opacity-100 w-4/6 h-full p-8"
      }`}
    >
      <button type="button" onClick={() => setShowSideBar(false)} aria-label='Close Sidebar' className='focus:outline-none'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav className="flex flex-col items-center justify-center text-base space-y-8 mt-4">
        <Link href="#projects">
          <a
            className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            onClick={() => setShowSideBar(false)}
          >
            Projects
          </a>
        </Link>
        <Link href="#contact">
          <a
            className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            onClick={() => setShowSideBar(false)}
          >
            Contact
          </a>
        </Link>
        <a
          href="#"
          className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          onClick={() => setShowSideBar(false)}
        >
          Services
        </a>
      </nav>
    </div>
  );
};
const Overlay = ({ showSideBar }) => {
  if (showSideBar) {
    return (
      <div className="fixed h-full w-full right-0 backdrop-filter backdrop-brightness-50 backdrop-blur-sm backdrop-grayscale z-10"></div>
    );
  } else {
    return null;
  }
};

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <Overlay showSideBar={showSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="text-gray-700 bg-white fixed top-0 w-full">
        <div className="flex px-4 py-5 sm:px-10 mx-auto border-b items-center flex-row justify-between">
          <a href="/" className="pr-2 lg:pr-8 focus:outline-none">
            <h2 className="font-semibold tracking-tighter text-gray-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
              Babatunde Yakub
            </h2>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
            type="button"
            aria-label='Menu Bar'
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <span className="block relative w-6 h-px rounded-sm bg-black"></span>
            <span className="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
          </button>
          <nav className="hidden sm:flex flex-wrap items-center justify-center text-base">
            <Link href="#projects">
              <a className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">
                Projects
              </a>
            </Link>
            <Link href="#contact">
              <a className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </Link>
            <a
              href="#"
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              Services
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
