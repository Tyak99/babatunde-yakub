const Footer = () => {
  return (
    <footer className="my-6 text-gray-700 bg-white">
      <div className="flex justify-between flex-grow">
        <div>
          <h4 className="mb-4 font-semibold text-lg">Profile</h4>
          <div className="flex flex-col md:flex-row gap-2 font-light underline">
            <a href="htt" className="hover:text-gray-800">
              Github
            </a>
            <a href="htt" className="hover:text-gray-800">
              Twitter
            </a>
            <a href="htt" className="hover:text-gray-800">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-lg">Other Links</h4>
          <div className="flex flex-col md:flex-row gap-2 font-light underline">
            <a href="htt" className="hover:text-gray-800">
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
