import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroText="hero-text"
        heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
        heading="Where Dream Meets Destination"
        subHeading="Discover the best place"
        btnName="Travel Plan"
        url="/"
        btnUrlcls="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
