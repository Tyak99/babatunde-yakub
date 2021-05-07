import Project from "../ui/Project";
import RtlProject from "../ui/RtlProject";

const Projects = () => {
  return (
    <div className="py-8 border-b" id="projects">
      <h4 className="text-2xl font-semibold leading-normaltext-gray-800 mb-2">
        Projects
      </h4>

      <div className="flex flex-col gap-12 mt-8">
        <Project
          title="Fibre LifeStyle"
          desc="Fibre LifeStyle is a real etstate company in Lagos, I joined as a Frontend Developer, and I have been working closely with 
          designers and other developers in the team for a period of over 1.5years now. I am involved in adding new features to both the 
          client and admin web application. I also developed a complex backend API that's consumed by a partner company, Bento. The goal of the solution is to
          have disbursed over 100 million naira in rent loans to Nigierians and Ghananians by the end of 2021."
          image="fibre-image"
          webLink="https://fibre.ng"
        />
        <RtlProject
          title="Jackocoins"
          desc="Jackocoins is a business that started on Whatsapp, buying and selling cryptocurrencies. The business soon became too large and complex to manage,
          the business owner reached out and we developed a client mobile and web app, we also developed a robust admin application. Since early 2021, Jackocoins
          users transact over 200 million naira daily."
          image="jackocoins-image"
          webLink="https://jackocoins.com"
          mobileLink="https://play.google.com/store/apps/details?id=com.jackocoins.app"
        />
        <Project
          title="SideHustle"
          desc="After a 3 days Hackothon with Wema Bank in 2019 (Hackaholics), I and my team were called back to build the solution we pitched to them, we 
          spent 4 months, incubated by the bank where we developed a mobile solution and I led the Frontend Development"
          image="sidehustle-image"
          mobileLink="https://play.google.com/store/apps/details?id=com.sidehustle&hl=en&gl=US"
        />
      </div>
    </div>
  );
};

export default Projects;
