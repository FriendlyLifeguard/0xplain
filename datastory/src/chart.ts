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

    const tvlData = jsonData.chainTvls["Starknet-borrowed"].tvl;
    
    const dates = tvlData.map(item => new Date(item.date * 1000).toISOString().split('T')[0]);
    const tvls = tvlData.map(item => item.totalLiquidityUSD);

    // Now that we have dates and TVLs, let's plot them
    const plotData: Plotly.Data[] = [{
        x: dates,
        y: tvls,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { size: 8 },
    }];

    const annotations = [{
        x: '2023-05-16',
        y: findTvlForDate('2023-05-16', tvlData),
        text: 'Launch date',
        showarrow: true,
        arrowhead: 1,
        ax: 0,
        ay: -40,
        bgcolor: 'lightyellow',
        font: {size: 12},
    },
    {
        x: '2024-01-17',
        y: findTvlForDate('2024-01-17', tvlData),
        text: 'Immportant news update caused a rally',
        showarrow: true,
        arrowhead: 1,
        ax: 0,
        ay: -40,
        bgcolor: 'lightyellow',
        font: {size: 12},
    }];

    const layout = {
        title: 'TVL Over Time: Nostra',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Total Value Locked (USD)' },
        // Example annotation - you might want to dynamically generate these
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
