import TripData from "./TripData";
import "./TripStyle.css";
import trip1 from "../assets/trip1.jpg";
import trip2 from "../assets/trip2.jpg";
import trip3 from "../assets/trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google maps</p>
      <div className="trip-card">
        <TripData
          img={trip1}
          heading="Coliseum, Italy"
          text="The Colosseum in Rome, Italy, is a large amphitheater that hosted events like gladiatorial games. Design Pics Inc. The Colosseum, also named the Flavian Amphitheater, is a large amphitheater in Rome. It was built during the reign of the Flavian emperors as a gift to the Roman people."
        />
        <TripData
          img={trip2}
          heading="Seoul, S.Korea"
          text="Cherry blossom in Korea, These trees are said to be the original Korean cherry trees and the best of all the cherry blossoms in Korea. The blossoms are larger than other types of cherry trees in Korea. Like a pink sponge, more a full flower than a simple blossom. They come out later from mid-April."
        />
        <TripData
          img={trip3}
          heading="Kanyakumari, India"
          text="Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip. The memorial stands on one of the two rocks located about 500 meters off mainland of Vavathurai. It was built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock."
        />
      </div>
    </div>
  );
}
export default Trip;
