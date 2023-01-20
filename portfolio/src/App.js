import "./App.scss";
import Header from "./components/Header/Header";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Socials from "./sections/Socials/Socials";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <div className="contact-section-wrapper">
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default App;
