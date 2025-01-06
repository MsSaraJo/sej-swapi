  
export default function DataCostPerMovie({ films, ships }) {
  if (ships.length > 0){
    console.log('CostData');

    //Set up Nivo Graph settings
    let GraphData = [
      {
      "id": "Starship Spending",
      "color": "hsl(222, 70%, 50%)",
      "data": [
      ]
    }
  ]
    let data = []
    let cost = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
  
    ships.forEach((ship) => {
      //Skip if value isn't a number
      if (!isNaN(ship[0].cost) && Number(ship[0].cost) > 0) {
        //console.log(ship[0].name);
        //console.log(ship[0].cost);
        cost[ship[0].filmPurchased] = cost[ship[0].filmPurchased] + Number(ship[0].cost);
        
        data[ship[0].filmPurchased] =  [{'cost':cost[ship[0].filmPurchased]}];
      }
    });



    for (const [key, value] of Object.entries(cost)){
      GraphData[0].data.push({'x': key, 'y': cost[key] });
    }
    console.log(GraphData);

    return {GraphData};
  }

};
