import Project from "../ui/Project";
import RtlProject from "../ui/RtlProject";

const Projects = () => {
  return (
    <div className="py-8 border-b">
      <h4 className="text-2xl font-semibold leading-normaltext-gray-800 mb-2">
        Projects
      </h4>

      <div className="flex flex-col gap-12 mt-8">
        <Project
          title="SideHustle"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        nisl lacus, vel vestibulum lectus pulvinar aliquet. Morbi commodo
        laoreet ligula non dictum."
          image="sidehustle-image"
        />
        <RtlProject
          title="Fibre LifeStyle"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        nisl lacus, vel vestibulum lectus pulvinar aliquet. Morbi commodo
        laoreet ligula non dictum."
          image="fibre-image"
        />
        <Project
          title="Jackocoins"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        nisl lacus, vel vestibulum lectus pulvinar aliquet. Morbi commodo
        laoreet ligula non dictum."
          image="jackocoins-image"
        />
      </div>
    </div>
  );
};

export default Projects;
