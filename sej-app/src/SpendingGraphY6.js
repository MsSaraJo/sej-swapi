import { ResponsivePie } from '@nivo/pie'

  
const SpendingGraphY6 = ({ data }) => {

  //manipulate film and ship data
  console.log('SpendingGraphY6');
  
  data = [    
    {
      "id": "Trade Federation cruiser",
      "label": "Trade Federation cruiser",
      "value": 125000000
    },
    {
      "id": "Theta-class T-2c shuttle",
      "label": "Theta-class T-2c shuttle",
      "value": 1000000
    },
    {
      "id": "Republic attack cruiser",
      "label": "Republic attack cruiser",
      "value": 59000000
    },
    {
      "id": "Naboo star skiff",
      "label": "Naboo star skiff",
      "value": null
    },
    {
      "id": "Jedi Interceptor",
      "label": "Jedi Interceptor",
      "value": 320000
    },
    {
      "id": "arc-170",
      "label": "arc-170",
      "value": 155000
    },
    {
      "id": "Banking clan frigte",
      "label": "Banking clan frigte",
      "value": 57000000
    },
    {
      "id": "Belbullab-22 starfighter",
      "label": "Belbullab-22 starfighter",
      "value": 168000
    },
    {
      "id": "V-wing",
      "label": "V-wing",
      "value": 102500
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

export default SpendingGraphY6;
