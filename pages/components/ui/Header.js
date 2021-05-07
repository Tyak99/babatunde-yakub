const Header = () => {
  return (
    <div className="text-gray-700 bg-white ">
      <div className="flex p-5 mx-auto border-b items-center flex-row justify-between">
        <a
          href="./index.html"
          className="pr-2 lg:pr-8 lg:px-6 focus:outline-none"
        >
          <div className="inline-flex items-center">
            <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
            <h2 className="font-semibold tracking-tighter text-gray-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
              Babatunde Yakub
            </h2>
          </div>
        </a>
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
          type="button"
        >
          <span className="block relative w-6 h-px rounded-sm bg-black"></span>
          <span className="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
        </button>
        <nav className="hidden sm:flex flex-wrap items-center justify-center text-base">
          <a
            href="#"
            className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Projects
          </a>
          <a
            href="#"
            className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Contact
          </a>
          <a
            href="#"
            className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Services
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
