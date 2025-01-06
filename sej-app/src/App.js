import React, { useEffect, useState } from "react";
import FilmAPI from "./api/FilmAPI"; 
import ShipAPI from "./api/ShipAPI"; 
import DataCostPerMovie from "./Data_CostPerMovie";
import SpendingGraph from "./SpendingGraph"; 
import SpendingGraphY1 from "./SpendingGraphY1"; 
import SpendingGraphY2 from "./SpendingGraphY2"; 
import SpendingGraphY3 from "./SpendingGraphY3"; 
import SpendingGraphY4 from "./SpendingGraphY4"; 
import SpendingGraphY5 from "./SpendingGraphY5"; 
import SpendingGraphY6 from "./SpendingGraphY6"; 
import './App.css';

export default function App() {
  const [films, setFilms] = useState([]);
  FilmAPI({ films, setFilms });
  const [ships, setShips] = useState([]);
  ShipAPI({ ships, setShips });

  if(typeof films !== 'undefined' && typeof ships !== 'undefined'){

    //Only send once I have finished API calls from films and ships
    var data = DataCostPerMovie({films, ships})

    if(typeof data !== 'undefined'){

      return (
        <div className="App">
          <header className="App-header">
            <h1>Galactic Expenditures: A Revelation of Imperial Spending Over Time</h1>
          </header>
          <div className="App-body">
            <div className="App-graph">
              <br /> 
              <div>
                <SpendingGraph
                  data={data.GraphData}
                />
                <div className="App-body-text">
                  <h2>Fig. 1:</h2>
                  <h4>Year 1: The Rise of the Death Star - Expense: 1,000,154,124,998 Credits</h4>
                  <p>The galactic credits chart skyrockets, as the Empire unveils its formidable instrument of dominion - the Death Star. With a price tag of just over one trillion credits, it sets a precedence in Imperial spending for unmatched military supremacy.</p>
                  <SpendingGraphY1
                    data={data.GraphData}
                  />
                  <h4>Year 2: The Fleet Expansion Protocol - Expense: 1,152,090,000 Credits</h4>
                  <p>Recovering from the astronomical investment in planet-ending technology, the Empire shifts resources towards augmenting its space fleets. This year's expenditure sees over a billion credits funneled into bolstering Star Destroyer ranks and TIE squadron fleets to maintain an iron grip on the galaxy.</p>
                  <SpendingGraphY2
                    data={data.GraphData}
                  />
                  <h4>Year 3: Reinforcing Dominance - Expense: 104,395,000 Credits</h4>
                  <p>Imperial coffers allocate a comparatively moderate sum to enforce order across rebellious sectors. These funds cater to ground operations including additional AT-ATs and stormtrooper gear as well as propaganda efforts to strengthen their narrative control.</p>
                  <SpendingGraphY3
                    data={data.GraphData}
                  />
                  <h4>Year 4: Counterinsurgency Measures - Expense: 55,200,000 Credits</h4>
                  <p>Amidst rising dissent, the Empire invests tens of millions in precision counterinsurgency tools. Spending drops as focus sharpens on intelligence gathering equipment and specialized droids designed for urban pacification and covert operations against rebel factions.</p>
                  <SpendingGraphY4
                    data={data.GraphData}
                  />
                  <h4>Year 5: Tactical Infrastructure Slash - Expense: 2,215,700 Credits</h4>
                  <p>A dip in expenses reveals a tactical pivot towards cost-effective warfare; mere millions are allocated for infrastructural enhancements. Defense perimeters on key planets and advanced training simulations ensure continued dominance despite reduced financial outlay.</p>
                  <SpendingGraphY5
                    data={data.GraphData}
                  />
                  <h4>Year 6: Project Resurrection - Expense: 242,745,500 Credits</h4>
                  <p>Concluding our chart is an intriguing bump in spending. Classified under 'Project Resurrection', this sizable investment hints at developmental projects resurrecting previous technologies - sparking rumors across Coruscant's underworld of a potential second coming of a Death Star-like leviathan.</p>
                  <SpendingGraphY6
                    data={data.GraphData}
                  />
                  <br/>
                  <p>Each credit spent delineates a chapter in the Empire's quest for order; each year reflects a shift in its evolving strategies. As we stand amidst whispers of new superweapons and constellations colored by imperial banners—these figures define an era.</p>
                  <p><small>**These graphs does not include the costs associated with the following Starships: TIE Advanced x1, Rebel Transport, Slave 1, Republic Cruiser, Droid Control Ship, Naboo Fighter, Naboo Royal Starship, AA-9 Coruscant freighter, H-type Nubian yacht, Republic Assault ship, and the Naboo star skiff.</small></p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="App-footer">
          <footer>© Copyright 2025 Sara Johnston</footer>
          </div>
        </div>
      );
    }else{ 
      return (
        <div className="App">
          <header className="App-header">
            <h2>Loading Graph Data!</h2>
            <img src="/ShipGIF.gif" alt="Flying ship loading gif" />
          </header>
        </div>
      )
    }
  }else{ 
    return (
      <div className="App">
        <header className="App-header">
          <h2>Loading Ship Data!</h2>
          <img src="/ShipGIF.gif" alt="Flying ship loading gif" />
        </header>
      </div>
    )
  }
}
