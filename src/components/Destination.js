import dest1 from "../assets/dest1.jpg";
import dest2 from "../assets/dest2.jpg";
import eifel from "../assets/ifel.jpg";
import paris from "../assets/paris.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot,within a time frame</p>
        <DestinationData
          className="des-head"
          heading="Mallorca, Spain"
          text=" Mallorca,or Majorca,is the largest island in the Balearic Islands,
            which are part of Spain, and the seventh largest island in the
            Mediterranean Sea. The capital of the island, Palma, is also the
            capital of the autonomous community of the Balearic Islands. The
            Balearic Islands have been an autonomous region of Spain since
            1983.There are two small islands off the coast of Mallorca: Cabrera
            (southeast of Palma) and Dragonera (west of Palma). The anthem of
            Mallorca is 'La Balanguera'. Like the other Balearic Islands of
            Menorca, Ibiza, and Formentera, the island is an extremely popular
            holiday destination, particularly for tourists from the Netherlands,
            Germany and the United Kingdom. The international airport, Palma de
            Mallorca Airport, is one of the busiest in Spain; it was used by 28
            million passengers in 2017, with use increasing every year since
            2012."
          img1={dest1}
          img2={dest2}
        />
        <DestinationData
          className="des-head-rev"
          heading="Paris"
          text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré"
          img1={eifel}
          img2={paris}
        />
      </div>
    </>
  );
};
export default Destination;
