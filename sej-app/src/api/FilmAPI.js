import React, { useEffect } from "react";

export default async function FilmAPI({ films, setFilms }) {

  useEffect(() => {
    const url = "https://swapi.info/api/films";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const films = [];
        //reformat data for our consumption
        json.forEach((film) => {
         
          films[film.episode_id] = [{'id':film.episode_id, 'name':film.title, 'starships':film.starships}];

        });
        // Only put the results in state, ie, the actual films array
        setFilms(films);
        //console.log(films);
        return films;
      } catch (error) {
        console.log("error", error);
        return '<div>Error fetching Film data.</div>'
      }
    };

    fetchData();
  }, []);

}