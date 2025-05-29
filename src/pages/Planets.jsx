import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi"; // to get data from mock API

function PlanetsPage() {

  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlanets() {
      try {
        const response = await SpaceTravelApi.getPlanets();
        if (response.isError) {
          throw new Error("Failed to load planets.");
        }
        setPlanets(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadPlanets()

  }, []); // Empty dependency array so it runs only once after initial render



  return (
    <div>
      <h2>Planets</h2>
      {isLoading && <p>Loading planets...⌛</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!isLoading && !error && (

        <ul>
          {planets.map((planet) => (
            <li key={planet.id}>
              <h4>{planet.name} </h4>
              <img src={planet.pictureUrl} alt={planet.name} style={{ width: "100px" }} />
              <p>Population: {planet.currentPopulation} </p>
              <p>Spacecrafts. Show icon of spacecraft assigned to this planet that can be clicked and take you to the Spacecraft detail page. Also display a decommision or delete button. Also need a way to move Spacecraft from one planet to another.</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlanetsPage;
