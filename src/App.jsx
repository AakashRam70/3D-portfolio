import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Parllax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/Services";
const App = () => {
  return <div>
    <section>
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parllax type="services" /></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>
    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
