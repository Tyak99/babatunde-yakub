const Footer = () => {
  return (
    <footer className="my-6 text-gray-700 bg-white">
      <div className="flex justify-between flex-grow">
        <div>
          <h4 className="mb-4 font-semibold text-lg">Profile</h4>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 font-light underline">
            <a
              href="https://github.com/tyak99"
              target="_blank"
              className="hover:text-gray-800"
            >
              Github
            </a>
            <a
              href="https://twitter.com/tundenasri"
              className="hover:text-gray-800"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/babatunde-yakub-a59520171/"
              className="hover:text-gray-800"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-lg">Other Links</h4>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 font-light underline">
            <a
              href="https://docs.google.com/document/d/1xrpLuLSmsQ8dtKzz2s19v5meoA-DCe2w2l_8vK8HONg/edit?usp=sharing"
              className="hover:text-gray-800"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
