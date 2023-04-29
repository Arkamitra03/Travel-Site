import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/aboutImg.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroText="hero-text-abt"
        heroImg={aboutImg}
        heading="Service"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
