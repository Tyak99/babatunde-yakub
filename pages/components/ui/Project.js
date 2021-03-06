const Project = ({ title, desc, image, mobileLink, webLink }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        style={{ backgroundImage: `url(./${image})` }}
        className="h-96 bg-cover lg:w-3/6 mb-4"
      ></div>
      <div className="p-4 lg:py-12 lg:px-12 lg:w-3/6 flex space-y-4 flex-col items-start">
        <h4 className="text-xl font-semibold leading-normal mb-2 text-gray-800">
          {title}
        </h4>
        <p className="text-xl font-light">{desc}</p>
        <div className="flex flex-row space-x-5">
          {webLink && (
            <a
              href={webLink}
              target="_blank"
              className="hover:text-gray-500 font-semibold"
              rel="noreferrer"
            >
              View Website
            </a>
          )}
          {mobileLink && (
            <a
              href={mobileLink}
              target="_blank"
              className="hover:text-gray-500 font-semibold"
              rel="noreferrer"
            >
              View App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
