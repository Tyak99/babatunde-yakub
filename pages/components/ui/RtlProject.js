const RtlProject = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="p-4  lg:py-20 lg:px-36 lg:w-3/6 flex gap-4 flex-col items-start">
        <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800">
          {title}
        </h4>
        <p className="text-xl font-light">{desc}</p>
        <button>Open website</button>
      </div>
      <div className={`bg-${image} h-96 bg-cover lg:w-3/6`}></div>
    </div>
  );
};

export default RtlProject;
