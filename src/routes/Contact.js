import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroText="hero-text-con"
        heroImg={contactImg}
        heading="Contact"
      />
      <Contactform />
      <Footer />
    </>
  );
}
export default Contact;
