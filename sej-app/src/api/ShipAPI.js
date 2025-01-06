import React, { useEffect } from "react";

export default async function ShipAPI({ ships, setShips }) {

  useEffect(() => {
    const url = "https://swapi.info/api/starships";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const ships = [];
        const films = [];
        //reformat data for our consumption
        json.forEach((ship) => {
        
          const id = ship.url.replace('https://swapi.info/api/starships/', '');
          const cost = Number(ship.cost_in_credits);
          const newTime = [];
          
          ship.films.forEach((film) => {
            const filmInt = film.replace('https://swapi.info/api/films/', '');
            
            newTime.push(Number(filmInt));
          })
          ships[id] = [{'id':id, 'name':ship.name, 'cost':cost, 'filmPurchased': newTime[0]}];
        });
        //console.log(ships);
        // Only put the results in state, ie, the actual ships array
        setShips(ships);
        //console.log(ships);
        return ships;
      } catch (error) {
        console.log("error", error);
        return '<div>Error fetching data.</div>'
      }
    };

    fetchData();
  }, []);

}