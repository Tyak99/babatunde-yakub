import Contact from "./modules/Contact";
import Footer from "./modules/Footer";
import Hero from "./modules/Hero";
import Projects from "./modules/Projects";

const Main = () => {
  return (
    <div className="px-10">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
