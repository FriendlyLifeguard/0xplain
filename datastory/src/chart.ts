import * as Plotly from 'plotly.js';

// Import Plotly dynamically

interface TvlsItem {
    date: number; // Unix timestamp
    totalLiquidityUSD: number;
}

interface ChainTvls {
    [key: string]: {
        tvl: TvlsItem[];
    };
}

interface ProtocolData {
    id: string;
    name: string;
    url: string;
    description: string;
    logo: string;
    gecko_id: string | null;
    cmcId: string;
    chains: string[];
    twitter: string;
    currentChainTvls: { [key: string]: number };
    chainTvls: ChainTvls;
}


function findTvlForDate(targetDate: string, tvlData: TvlsItem[]): number | undefined {
    const targetTimestamp = new Date(targetDate).getTime() / 1000;

    const entry = tvlData.find(item => {
        // Ensure item.date is treated as a number for the comparison
        const itemDateAsNumber: number = item.date;
        return itemDateAsNumber === targetTimestamp;
    });

    return entry?.totalLiquidityUSD;
}

async function fetchDataAndPlot() {
    const apiUrl = 'https://api.llama.fi/protocol/nostra';

    try {
    const response = await fetch(apiUrl);
    const jsonData: ProtocolData = await response.json();

    const tvlData = jsonData.chainTvls["Starknet"].tvl;
    
    const dates = tvlData.map(item => new Date(item.date * 1000).toISOString().split('T')[0]);
    const tvls = tvlData.map(item => item.totalLiquidityUSD);

    // Now that we have dates and TVLs, let's plot them
    const plotData: Plotly.Data[] = [{
        x: dates,
        y: tvls,
        type: 'scatter',
        mode: 'lines',
        fill: 'tozeroy',
        line: {
            color: 'rgb(31, 119, 180)',  // Example: blue line
            width: 2,
        },
        fillcolor: 'rgba(31, 119, 180,0.3)',
    }];

    const specialEvents = [
        { date: '2023-05-16', text: 'Launch date' },
        { date: '2023-12-10', text: 'Important news update <br> causing a rally' }
    ];

    const annotations = specialEvents.map(event => {
        const yValue = findTvlForDate(event.date, tvlData);
        return {
            x: event.date,
            y: yValue,
            text: 'Launch date',
            showarrow: true,
            arrowhead: 2,
            ax: 0,
            ay: 30,
            bgcolor: 'rgba(0,0,0,0)',  // Transparent background
            borderwidth: 0,
            font: {size: 16},
        }
    });

    const layout = {
        title: 'TVL Over Time: Nostra',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Total Value Locked (USD)' },
        width: 800,
        height: 600,
        font: {
            family: 'Arial, sans-serif',
            size: 16,
            color: '#7f7f7f'
        },
        plot_bgcolor: "rgba(242, 242, 242, 0.7)",  // Light grey background
        paper_bgcolor: "rgba(242, 242, 242, 0.7)",
        annotations: annotations,
    };


    Plotly.newPlot('myDiv', plotData, layout);
    } catch (error) {
    console.error('Error fetching or plotting data:', error);
    }
}

fetchDataAndPlot(); // Call the function to fetch data and plot the chart
  

// const data: Plotly.Data[] = [{
//     x: ['2024-02-16', '2024-02-17'], // Example dates
//     y: [100, 150], // Example TVL values
//     type: 'scatter', // Line chart can be created with scatter type and mode set to lines
//     mode: 'lines+markers',
//     marker: {size: 8},
// }];




// const layout: Partial<Plotly.Layout> = {
//     title: 'Total Value Locked (TVL) Over Time',
//     xaxis: {
//         title: 'Date',
//     },
//     yaxis: {
//         title: 'Total Value Locked (USD)',
//     },
//     annotations: annotations,
// };

// Plotly.newPlot('myDiv', data, layout);
