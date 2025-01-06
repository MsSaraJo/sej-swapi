import { ResponsiveLine } from '@nivo/line';

  
const SpendingGraph = ({ data }) => {

  //manipulate film and ship data
  console.log('SpendingGraph');
  console.log(data);

  return (
    <div style={{ height: '600px', minWidth : "600px", 'backgroundColor': 'white'}}>
      <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 140, bottom: 70, left: 100 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Spending Over Time (Movies)',
              legendOffset: 36,
              legendPosition: 'middle',
              truncateTickAt: 0
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -30,
              legend: 'Cost In Credits',
              legendOffset: -90,
              legendPosition: 'middle',
              truncateTickAt: 0
          }}
          colors={{ scheme: 'category10' }}
          lineWidth={3}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enablePointLabel={true}
          pointLabel="data.y"
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          isInteractive={false}
          useMesh={true}
          legends={[
              {
                  anchor: 'top-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
      />
    </div>
  );
};

export default SpendingGraph;
