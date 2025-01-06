import { ResponsivePie } from '@nivo/pie'

  
const SpendingGraphY1 = ({ data }) => {

  //manipulate film and ship data
  console.log('SpendingGraphY1');
  
  data = [
    {
      "id": "CR90 corvette",
      "label": "CR90 corvette",
      "value": 3500000,
    },
    {
      "id": "Star Destroyer",
      "label": "Star Destroyer",
      "value": 150000000,
    },
    {
      "id": "Sentinel-class landing craft",
      "label": "Sentinel-class landing craft",
      "value": 240000,
    },
    {
      "id": "Death Star",
      "label": "Death Star",
      "value": 1000000000000,
    },
    {
      "id": "Millennium Falcon",
      "label": "Millennium Falcon",
      "value": 100000,
    },
    {
      "id": "Y-wing",
      "label": "Y-wing",
      "value": 134999,
    },
    {
      "id": "X-wing",
      "label": "X-wing",
      "value": 149999,
    },
    {
      "id": "TIE Advanced x1",
      "label": "TIE Advanced x1",
      "value": null,
    }
  ]

  return (
    <div style={{ height: '400px', minWidth : "400px", 'backgroundColor': 'white'}}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
      />
    </div>
  );
};

export default SpendingGraphY1;
