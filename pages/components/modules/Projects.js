import Project from "../ui/Project";
import RtlProject from "../ui/RtlProject";

const Projects = () => {
  return (
    <div className="py-8 border-b" id='projects'>
      <h4 className="text-2xl font-semibold leading-normaltext-gray-800 mb-2">
        Projects
      </h4>

      <div className="flex flex-col gap-12 mt-8">
        <Project
          title="Fibre LifeStyle"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        nisl lacus, vel vestibulum lectus pulvinar aliquet. Morbi commodo
        laoreet ligula non dictum."
          image="fibre-image"
          webLink='https://fibre.ng'
        />
        <RtlProject
          title="Jackocoins"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        nisl lacus, vel vestibulum lectus pulvinar aliquet. Morbi commodo
        laoreet ligula non dictum."
          image="jackocoins-image"
          webLink='https://jackocoins.com'
          mobileLink='https://play.google.com/store/apps/details?id=com.jackocoins.app'
        />
        <Project
          title="SideHustle"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        nisl lacus, vel vestibulum lectus pulvinar aliquet. Morbi commodo
        laoreet ligula non dictum."
          image="sidehustle-image"
          mobileLink='https://play.google.com/store/apps/details?id=com.sidehustle&hl=en&gl=US'
        />
      </div>
    </div>
  );
};

export default Projects;
