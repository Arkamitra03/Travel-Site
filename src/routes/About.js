import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/aboutImg.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroText="hero-text-abt"
        heroImg={aboutImg}
        heading="About"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
