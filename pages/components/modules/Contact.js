const Contact = () => {
  return (
    <div className="py-8 border-b" id='contact'>
      <h4 className="text-2xl font-semibold leading-normaltext-gray-800 mb-2">
        Contact me
      </h4>
      <div className="flex flex-col">
        <p className="text-xl font-light mt-4">
          You can send me an email{" "}
          <a className="underline" href="mailto:tundenasri@gmail.com">
            tundenasri@gmail.com
          </a>
        </p>
        <p className="text-xl font-light mt-4">
          Connect with me on LinkedIn{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/babatunde-yakub-a59520171/"
            target="_blank"
            rel="noreferrer"
          >
            Babatunde Yakub
          </a>
        </p>
        <p className="text-xl font-light mt-4">
          Follow me on Twitter{" "}
          <a className="underline" href="https://twitter.com/tundenasri" target='_blank' rel="noreferrer">
            @tundenasri
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
