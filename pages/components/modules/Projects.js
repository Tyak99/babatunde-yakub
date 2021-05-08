import Project from "../ui/Project";
import RtlProject from "../ui/RtlProject";

const Projects = () => {
  return (
    <div className="py-8 border-b" id="projects">
      <h4 className="text-2xl font-semibold leading-normaltext-gray-800 mb-2">
        Projects
      </h4>

      <div className="flex flex-col space-y-12 mt-8">
        <Project
          title="Fibre LifeStyle"
          desc="Fibre LifeStyle is a real etstate company in Lagos, I joined as a Frontend Developer, and I have been working closely with 
          designers and other developers in the team to manage the comapany's client and admin application for over 1.5 years. 
          I also developed a complex backend API that's consumed by a partner company, Bento. The goal of the solution is to
          have disbursed over 100 million naira in rent loans to Nigierians and Ghananians by the end of 2021."
          image="fibre.svg"
          webLink="https://fibre.ng"
        />
        <hr className="sm:hidden w-3/6 m-auto" />
        <RtlProject
          title="Jackocoins"
          desc="Jackocoins is a cryptocurrency exchange platform that started on WhatsApp. With complexities and management difficulties, 
          we were engaged to develop a client-facing mobile and web app, and a robust admin app. Since early 2021, Jackocoins users transacts over 50 million naira daily."
          image="jackocoins.svg"
          webLink="https://jackocoins.com"
          mobileLink="https://play.google.com/store/apps/details?id=com.jackocoins.app"
        />
        <hr className="sm:hidden w-3/6 m-auto" />
        <Project
          title="SideHustle"
          desc="SideHustle was conceptualized during a 72-hour programming hackathon (2019 Hackaholics by Wema Bank). 
          The impressive pitch by my team led to our selection as participants in the 4-month boot camp for full-scale product development. I led the Frontend Development of the mobile solution for the product."
          image="sidehustle.jpg"
          mobileLink="https://play.google.com/store/apps/details?id=com.sidehustle&hl=en&gl=US"
        />
      </div>
    </div>
  );
};

export default Projects;
