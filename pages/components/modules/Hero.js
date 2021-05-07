import Badge from "../ui/Badge";

const Hero = () => {
  return (
    <div className="border-b py-8">
      <div className="flex">
        <div>
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 tracking-wide">
            Hello there,
          </h3>
          <p className="leading-loose font-light lg:w-4/5 text-lg">
            My name is Babatunde Yakub, a FullStack Engineer. I’m a systems
            thinker who can work with a team to transform complex workflows into
            intuitive technology. I have a history of Web development and
            building complex systems from the ground-up. What can I do for you? I
            can convert your idea into a product. Do you have a project I can
            help you with? <a href="#contact" className='underline'>Contact me</a>
          </p>
          <div className="mt-4">
            <div className="flex">
              <Badge text="Frontend" icon='code'/>
              <Badge text="Backend" icon='server' />
            </div>
            <Badge text="Cloud Enthusiast (I love AWS)" icon="cloud" />
          </div>
          {/* <img src="./tunde.png" alt="" className='sm:hidden mt-4'/> */}
        </div>
        <img src="./hero.svg" alt="" className='hidden lg:block w-2/4' />
      </div>
    </div>
  );
};

export default Hero;
